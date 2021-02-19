import { fromNullable } from "./fp_utils";

const formateCategoryName = (name: string | undefined): any =>
  fromNullable(name, "No category's name found")
    .map((categoryName) => categoryName.split(" ")[0])
    .map(
      (categoryFirstName) =>
        categoryFirstName.slice(0, 1).toUpperCase() +
        categoryFirstName.split(" ")[0].slice(1)
    )
    .fold(
      (_: any, error: string) => error, // Return the given error passed to fromNullable
      (categoryName: string) => categoryName // In case of success, return the modified category name
    );

const formatePrice = (price: number): string => `$${price.toString()}`;

export { formateCategoryName, formatePrice };