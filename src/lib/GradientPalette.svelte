<!-- GradientPalette.svelte -->
<script lang="ts">
    /**
     * columns: array of { h: number (0–360), s: number (0–100), label?: string }
     * Example: [{h:160, s:40, label:'sage'}, ...] (pass 5 of these)
     */
    export let columns: Array<{ h: number; s: number }> = [];

    // Dimensions
    export let columnWidth = 92; // px
    export let columnHeight = 256; // px
    export let gap = 0; // px between columns

    // Lightness sweep
    export let lStart = 90; // top lightness %
    export let lEnd = 30; // bottom lightness %
    export let steps = 7; // number of lightness steps if stepped=true

    const color = (h: number, s: number, l: number) => `hsl(${h} ${s}% ${l}%)`;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const stepLightnesses = (n: number, lo = lStart, hi = lEnd) => {
        if (n <= 1) return [lo];
        const arr = [];
        for (let i = 0; i < n; i++) {
            const t = i / (n - 1);
            arr.push(lerp(lo, hi, t));
        }
        return arr;
    };
</script>

<div
    class="palette"
    style="
    grid-template-columns: repeat({columns.length || 5}, {columnWidth}px);
    gap: {gap}px;
  "
>
    {#each columns as c (`${c.h}-${c.s}`)}
        <!-- Stepped column (blocky lightness levels) -->
        <div
            class="col"
            style="width:{columnWidth}px; height:{columnHeight}px; display:flex; flex-direction:column;"
            aria-label={`Stepped gradient: h ${c.h}, s ${c.s}%, ${steps} steps`}
            title={`H${c.h} S${c.s}% • ${steps} steps`}
        >
            {#each stepLightnesses(steps) as L}
                <div class="step" style="flex:1; background:{color(c.h, c.s, L)}"></div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .palette {
        display: grid;
        grid-auto-rows: 1fr;
    }
    .col {
        border-radius: 12px;
        overflow: hidden;
    }
    .step {
        width: 100%;
    }
</style>
