import React, { FC, ReactNode } from "react";

import stitches from "../../stitches";
import products from "../../resources/products";
import categories from "../../resources/categories";
import availabilityOptions from "../../resources/availabilityOptions";
import priceOptions from "../../resources/priceOptions";

const { styled } = stitches;

const FiltersContainer: FC<{ children?: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "14rem",
  minWidth: "14rem",
  backgroundColor: "$grey_800",

  borderStyle: "solid",
  borderWidth: "0 1px 0 0",
  borderColor: "$grey_600",
});

const FiltersHeaderFooter: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "2.5rem",
  borderStyle: "solid",
  borderWidth: "0 0 1px 0",
  borderColor: "$grey_600",
  padding: "0 $regular",
});

const FiltersHeaderFooterTitle: FC<{ children: ReactNode }> = styled("p", {
  flex: 1,
  fontSize: "$font_small",
  color: "$grey_200",
  fontWeight: 500,
  margin: "0",
});

const FiltersHeaderFooterOption: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "$font_small",
  color: "$primary",
  fontWeight: 500,
  margin: "0",
  cursor: "pointer",
});

const FilterContent: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 $regular",
});

const FilterTypeTitle: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "0.625em",
  color: "$grey_300",
  fontWeight: 600,
  textTransform: "uppercase",
  margin: "$regular 0 0 0",
});

const FilterOptionInput: FC<{ type: any; name: any }> = styled("input", {
  margin: "0",
});

const FilterOptionLabel: FC<{ children: ReactNode }> = styled("label", {
  display: "grid",
  fontSize: "$font_small",
  color: "$grey_200",
  fontWeight: 500,
  margin: "$xxsmall 0 0 0",
  alignItems: "center",
  gridTemplateColumns: "1em auto",
  gap: "0.5em",
  cursor: "pointer",
});

const ProductsPage: FC = () => {
  return (
    <FiltersContainer>
      <FiltersHeaderFooter>
        <FiltersHeaderFooterTitle>Sort by</FiltersHeaderFooterTitle>
        <FiltersHeaderFooterOption>Price</FiltersHeaderFooterOption>
      </FiltersHeaderFooter>
      <FilterContent>
        <FilterTypeTitle>Category</FilterTypeTitle>
        {categories
          .find((category) => category.id === "garden")
          ?.subCategories?.map((subCategory) => {
            return (
              <FilterOptionLabel key={subCategory.id}>
                <FilterOptionInput type="radio" name="category_radio" />
                {subCategory.name}
              </FilterOptionLabel>
            );
          })}
        <FilterTypeTitle>Availability</FilterTypeTitle>
        {availabilityOptions.map((availability) => {
          return (
            <FilterOptionLabel key={availability.id}>
              <FilterOptionInput type="checkbox" name="availablity_checkbox" />
              {availability.name}
            </FilterOptionLabel>
          );
        })}
        <FilterTypeTitle>Price</FilterTypeTitle>
        {priceOptions.map((price) => {
          const { min, max } = price;
          let priceText = "";
          if (min === 0) {
            priceText = `Up to ${max}€`;
          } else if (max === null) {
            priceText = `${min}€ and more`;
          } else {
            priceText = `${min}€ to ${max}€`;
          }
          return (
            <FilterOptionLabel key={`price_${min}_${max}`}>
              <FilterOptionInput type="checkbox" name="price_checkbox" />
              {priceText}
            </FilterOptionLabel>
          );
        })}
      </FilterContent>
      <FiltersHeaderFooter>
        <FiltersHeaderFooterTitle>{`${products.length} results`}</FiltersHeaderFooterTitle>
        <FiltersHeaderFooterOption>Clear filters</FiltersHeaderFooterOption>
      </FiltersHeaderFooter>
    </FiltersContainer>
  );
};

export default ProductsPage;
