<script lang="ts">
    export let colors: string[] = []; // expects an array of 6 hex/rgb/hsl color strings
</script>

<table class="palette">
    <tbody>
        <tr>
            <td style="background: {colors[0]}"></td>
            <td style="background: {colors[1]}"></td>
            <td style="background: {colors[2]}"></td>
        </tr>
        <tr>
            <td style="background: {colors[3]}"></td>
            <td style="background: {colors[4]}"></td>
            <td style="background: {colors[5]}"></td>
        </tr>
    </tbody>
</table>

<style>
    table.palette {
        border-collapse: collapse;
        table-layout: fixed;
    }
    td {
        width: 128px;
        height: 128px;
        padding: 0;
    }
</style>
