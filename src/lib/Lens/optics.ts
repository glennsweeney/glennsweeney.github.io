class Vector {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class PlanarElement {
    vertex: number;
    indexBefore: number;
    indexAfter: number;
    constructor(vertex: number, indexBefore: number, indexAfter: number) {
        this.vertex = vertex;
        this.indexBefore = indexBefore;
        this.indexAfter = indexAfter;
    }
}

class SphericalElement {
    vertex: number;
    curvature: number;
    indexBefore: number;
    indexAfter: number;
    constructor(vertex: number, curvature: number, indexBefore: number, indexAfter: number) {
        this.vertex = vertex;
        this.curvature = curvature;
        this.indexBefore = indexBefore;
        this.indexAfter = indexAfter;
    }
}

class Ray {
    pos: Vector;
    dir: Vector;
    constructor(pos: Vector, dir: Vector) {
        this.pos = pos;
        this.dir = dir;
    }

    static fromComponents(
        xPos: number,
        yPos: number,
        zPos: number,
        xDir: number,
        yDir: number,
        zDir: number
    ) {
        return new Ray(new Vector(xPos, yPos, zPos), new Vector(xDir, yDir, zDir));
    }

    static invalid() {
        return new Ray(new Vector(NaN, NaN, NaN), new Vector(NaN, NaN, NaN));
    }
}

function refract(rayDir: Vector, normalDir: Vector, indexRatio: number): Vector {
    if (normalDir.z > 0) {
        normalDir = new Vector(-normalDir.x, -normalDir.y, -normalDir.z);
    }

    const cosAngleIn =
        -1.0 * (rayDir.x * normalDir.x + rayDir.y * normalDir.y + rayDir.z * normalDir.z);
    const d =
        indexRatio * cosAngleIn -
        Math.sqrt(1 - indexRatio * indexRatio * (1 - cosAngleIn * cosAngleIn));

    const newDir = new Vector(
        indexRatio * rayDir.x + d * normalDir.x,
        indexRatio * rayDir.y + d * normalDir.y,
        indexRatio * rayDir.z + d * normalDir.z
    );

    console.log(rayDir, normalDir, indexRatio, cosAngleIn, d, newDir);

    return newDir;
}

function interactPlane(surface: PlanarElement, ray: Ray): Ray {
    if (ray.pos.z > surface.vertex) {
        // Plane is behind us; return.
        return Ray.invalid();
    }

    const zPos = ray.pos.z - surface.vertex;

    const t = -zPos / ray.dir.z;

    const newPos = new Vector(ray.pos.x + t * ray.dir.x, ray.pos.y + t * ray.dir.y, surface.vertex);
    const newDir = refract(ray.dir, new Vector(0, 0, -1), surface.indexBefore / surface.indexAfter);

    return new Ray(newPos, newDir);
}

function interactSphere(surface: SphericalElement, ray: Ray): Ray {
    // First we intersect the ray with the surface

    if (surface.curvature === 0) {
        return interactPlane(
            new PlanarElement(surface.vertex, surface.indexBefore, surface.indexAfter),
            ray
        );
    }

    const xPos = ray.pos.x;
    const yPos = ray.pos.y;
    const zPos = ray.pos.z - surface.vertex;
    const xDir = ray.dir.x;
    const yDir = ray.dir.y;
    const zDir = ray.dir.z;

    // Quadratic formula parameters
    const a = surface.curvature * (xDir ** 2 + yDir ** 2 + zDir ** 2);
    const b = 2.0 * (surface.curvature * (xPos * xDir + yPos * yDir + zPos * zDir) - zDir);
    const c = surface.curvature * (xPos * xPos + yPos * yPos + zPos * zPos) - 2.0 * zPos;
    const discriminant = b * b - 4.0 * a * c;

    console.log(a, b, c, discriminant);

    let t = 0;
    if (a === 0) {
        // The surface is flat, we have a linear equation
        t = -zPos / zDir;
    } else {
        if (discriminant < 0) {
            // We missed, immediately return a dud ray
            return Ray.invalid();
        } else if (discriminant === 0) {
            t = -b / (2.0 * a);
        } else {
            const t1 = (-b + Math.sqrt(discriminant)) / (2.0 * a);
            const t2 = (-b - Math.sqrt(discriminant)) / (2.0 * a);
            if (t1 < 0 && t2 < 0) {
                // The surface is behind us, return a dud ray
                return Ray.invalid();
            } else if (t1 < 0) {
                t = t2;
            } else if (t2 < 0) {
                t = t1;
            } else {
                t = Math.min(t1, t2);
            }
        }
    }
    console.log(t);

    const newPos = new Vector(xPos + t * xDir, yPos + t * yDir, zPos + t * zDir + surface.vertex);

    // We calculate the normal vector at that point as the ray from the surface radius [0, 0, radius] to the intersection point [newXPos, newYPos, newZPos]
    let normalX = newPos.x;
    let normalY = newPos.y;
    let normalZ = newPos.z - surface.vertex - 1.0 / surface.curvature;
    const length = Math.sqrt(normalX * normalX + normalY * normalY + normalZ * normalZ);
    normalX /= length;
    normalY /= length;
    normalZ /= length;

    const newDir = refract(
        ray.dir,
        new Vector(normalX, normalY, normalZ),
        surface.indexBefore / surface.indexAfter
    );

    return new Ray(newPos, newDir);
}

export { PlanarElement, SphericalElement, Ray, interactPlane, interactSphere };
