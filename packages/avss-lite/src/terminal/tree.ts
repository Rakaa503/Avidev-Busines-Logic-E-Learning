export function tree(title: string, items: string[]): void {
  console.log(`\n${title}\n`);

  items.forEach((item, index) => {
    const last = index === items.length - 1;

    console.log(
      `${last ? "└──" : "├──"} ${item}`,
    );
  });

  console.log();
}