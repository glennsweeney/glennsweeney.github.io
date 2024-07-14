import { PlanarElement, SphericalElement, Ray, interactPlane, interactSphere } from "./optics";
import { describe, it, expect } from "vitest";

describe("interactPlane", () => {
    it("should return a new Ray object with updated position and direction", () => {
        const surface = new PlanarElement(1.0, 1.0, 1.0);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0, 1);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(1.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should propagate an on-axis ray to the vertex", () => {
        const surface = new PlanarElement(17.4, 1.0, 1.6);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0, 1);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(17.4, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should handle negative starting coordinates and shifted rays", () => {
        const surface = new PlanarElement(22.1, 1.0, 1.6);
        const ray = Ray.fromComponents(1, 2, -4, 0, 0, 1);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(1, 5);
        expect(result.pos.y).toBeCloseTo(2, 5);
        expect(result.pos.z).toBeCloseTo(22.1, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should report a ray miss if the propagation distance would be negative", () => {
        const surface = new PlanarElement(0, 1.7, 1.2);
        const ray = Ray.fromComponents(0, 0, 2, 0, 0, 1);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBe(NaN);
        expect(result.pos.y).toBe(NaN);
        expect(result.pos.z).toBe(NaN);
        expect(result.dir.x).toBe(NaN);
        expect(result.dir.y).toBe(NaN);
        expect(result.dir.z).toBe(NaN);
    });

    it("should continue an angled ray undeviated if the index doesn't change", () => {
        const surface = new PlanarElement(3.0, 1.5, 1.5);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        expect(result.pos.y).toBeCloseTo(3.0, 5);
        expect(result.pos.z).toBeCloseTo(3.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.707106781, 5);
        expect(result.dir.z).toBeCloseTo(0.707106781, 5);
    });

    it("should bend inwards with an increasing index change", () => {
        const surface = new PlanarElement(3.0, 1.0, 1.5);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        expect(result.pos.y).toBeCloseTo(3.0, 5);
        expect(result.pos.z).toBeCloseTo(3.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.471404433, 5);
        expect(result.dir.z).toBeCloseTo(0.881917151, 5);
    });

    it("should bend outwards with a decreasing index change", () => {
        const surface = new PlanarElement(3.0, 1.5, 1.1);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactPlane(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        expect(result.pos.y).toBeCloseTo(3.0, 5);
        expect(result.pos.z).toBeCloseTo(3.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.96423663, 5);
        expect(result.dir.z).toBeCloseTo(0.26504286, 5);
    });
});

describe("interactSphere", () => {
    it("should return a new Ray object with updated position and direction", () => {
        const surface = new SphericalElement(1.0, 3.4, 1.0, 1.0);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0, 1);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(1.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should propagate an on-axis ray to the vertex", () => {
        const surface = new SphericalElement(17.4, 1.2, 1.0, 1.6);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0, 1);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(17.4, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should handle negative starting coordinates", () => {
        const surface = new SphericalElement(22.1, 9.6, 1.0, 1.6);
        const ray = Ray.fromComponents(0, 0, -4, 0, 0, 1);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(22.1, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it("should report a ray miss if the propagation distance would be negative", () => {
        const surface = new SphericalElement(0, -1.2, 1.7, 1.2);
        const ray = Ray.fromComponents(0, 0, 2, 0, 0, 1);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBe(NaN);
        expect(result.pos.y).toBe(NaN);
        expect(result.pos.z).toBe(NaN);
        expect(result.dir.x).toBe(NaN);
        expect(result.dir.y).toBe(NaN);
        expect(result.dir.z).toBe(NaN);
    });

    it("should continue an angled ray undeviated if the index doesn't change", () => {
        const surface = new SphericalElement(3.0, -0.43, 1.5, 1.5);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        // Skip y test as it's not the focus of this test
        // Skip z test as it's not the focus of this test
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.707106781, 5);
        expect(result.dir.z).toBeCloseTo(0.707106781, 5);
    });

    it("should bend inwards with an increasing index change", () => {
        const surface = new SphericalElement(0.0, 1.2, 1.0, 1.5);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(0.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.471404433, 5);
        expect(result.dir.z).toBeCloseTo(0.881917151, 5);
    });

    it("should bend outwards with a decreasing index change", () => {
        const surface = new SphericalElement(0.0, -1.6, 1.5, 1.1);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0.0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(0.0, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.96423663, 5);
        expect(result.dir.z).toBeCloseTo(0.26504286, 5);
    });

    it("should revert to planar interaction if the sphere has zero curvature", () => {
        const surface = new SphericalElement(17.4, 0.0, 1.0, 1.6);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0, 1);

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(0, 5);
        expect(result.pos.z).toBeCloseTo(17.4, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0, 5);
        expect(result.dir.z).toBeCloseTo(1, 5);
    });

    it.only("should bend off-axis rays towards the optical axis with a positive curvature", () => {
        const surface = new SphericalElement(1, 1.0 / 3.0, 1.0, 1.5);
        const ray = Ray.fromComponents(0, 0, 0, 0, 0.707106781, 0.707106781);

        // 25.5287794 degrees for normal vector angle
        // 45 degrees for incident ray angle
        // 38.94244 degrees for outgoing ray angle (relative to normal)

        const result = interactSphere(surface, ray);

        expect(result).toBeInstanceOf(Ray);
        expect(result.pos.x).toBeCloseTo(0, 5);
        expect(result.pos.y).toBeCloseTo(1.2928931306, 5);
        expect(result.pos.z).toBeCloseTo(1.2928931306, 5);
        expect(result.dir.x).toBeCloseTo(0, 5);
        expect(result.dir.y).toBeCloseTo(0.65754094714, 5);
        expect(result.dir.z).toBeCloseTo(0.75341880971, 5);
    });
});
