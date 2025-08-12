<script>
    import Palette from "$lib/Palette.svelte";
    import GradientPalette from "$lib/GradientPalette.svelte";

    const cols = [
        { h: 86, s: 20 },
        { h: 17, s: 38 },
        { h: 198, s: 15 },
        { h: 42, s: 56 },
        { h: 156, s: 5 }
    ];
</script>

<Palette colors={["#86AB90", "#BA6645", "#2E3331", "#6F8DA0", "#CFA43C", "#2E3331"]} />

<div style="height: 64px;"></div>

<Palette colors={["#7fa48e", "#c06c4a", "#2E3331", "#5e7480", "#b8923a", "#2E3331"]} />

<div style="height: 64px;"></div>

<Palette colors={["#8b915e", "#9e4f3b", "#2E3331", "#607784", "#b06f45", "#2E3331"]} />

<div style="height: 64px;"></div>

<Palette colors={["#6f8a5f", "#7d543a", "#2E3331", "#5f7482", "#c49a3a", "#2E3331"]} />

<div style="height: 64px;"></div>

<Palette colors={["#9fb089", "#b87a61", "#2E3331", "#6d8792", "#c79e3b", "#2E3331"]} />

<div style="height: 64px;"></div>

<GradientPalette columns={cols} />
