declare module "tailwindcss/lib/util/flattenColorPalette" {
  interface ColorPalette {
    [key: string]: any; // Adjust based on actual structure if known
  }

  const flattenColorPalette: (colors: ColorPalette) => ColorPalette;
  export default flattenColorPalette;
}
