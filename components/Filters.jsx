import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Filters.module.css";
const filtersData = [
  {
    placeholder: "Search area",
    queryName: "area",
  },
  {
    placeholder: "Search radius",
    queryName: "radius",
    items: [
      { name: "This area", value: "0" },

      { name: "+0.5 miles", value: "0.5" },
      { name: "+1 miles", value: "1" },
      { name: "+3 miles", value: "3" },
      { name: "+5 miles", value: "5" },
      { name: "+10 miles", value: "10" },
      { name: "+15 miles", value: "15" },
      { name: "+20 miles", value: "20" },
      { name: "+30 miles", value: "30" },
      { name: "+40 miles", value: "40" },
    ],
  },
  {
    placeholder: "Min bedrooms",
    queryName: "minimum_beds",
    items: [
      { name: "Any beds", value: "0" },
      { name: "0", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4+", value: "4" },
    ],
  },
  {
    placeholder: "Max bedrooms",
    queryName: "maximum_beds",
    items: [
      { name: "Any beds", value: "0" },
      { name: "0", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4+", value: "4" },
    ],
  },
  {
    placeholder: "Min price",
    queryName: "minimum_price",
    items: [
      { name: "No min", value: "0" },

      { name: "300 pcm", value: "300" },
      { name: "350 pcm", value: "350" },
      { name: "400 pcm", value: "400" },
      { name: "450 pcm", value: "450" },
      { name: "500 pcm", value: "500" },
      { name: "600 pcm", value: "600" },
      { name: "650 pcm", value: "650" },
      { name: "700 pcm", value: "700" },
      { name: "750 pcm", value: "750" },
      { name: "800 pcm", value: "800" },
      { name: "850 pcm", value: "850" },
      { name: "900 pcm", value: "900" },
      { name: "950 pcm", value: "950" },
      { name: "1000 pcm", value: "1000" },
      { name: "1250 pcm", value: "1250" },
      { name: "1500 pcm", value: "1500" },
      { name: "1750 pcm", value: "1750" },
      { name: "2000 pcm", value: "2000" },
      { name: "2500 pcm", value: "2500" },
      { name: "3000 pcm", value: "3000" },
      { name: "3500 pcm", value: "3500" },
      { name: "4000 pcm", value: "4000" },
      { name: "4500 pcm", value: "4500" },
      { name: "5000 pcm", value: "5000" },
      { name: "5500 pcm", value: "5500" },
      { name: "6000 pcm", value: "6000" },
      { name: "6500 pcm", value: "6500" },
      { name: "7000 pcm", value: "7000" },
      { name: "7500 pcm", value: "7500" },
    ],
  },
  {
    placeholder: "Max price",
    queryName: "maximum_price",
    items: [
      { name: "No max", value: "0" },

      { name: "300 pcm", value: "300" },
      { name: "350 pcm", value: "350" },
      { name: "400 pcm", value: "400" },
      { name: "450 pcm", value: "450" },
      { name: "500 pcm", value: "500" },
      { name: "600 pcm", value: "600" },
      { name: "650 pcm", value: "650" },
      { name: "700 pcm", value: "700" },
      { name: "750 pcm", value: "750" },
      { name: "800 pcm", value: "800" },
      { name: "850 pcm", value: "850" },
      { name: "900 pcm", value: "900" },
      { name: "950 pcm", value: "950" },
      { name: "1000 pcm", value: "1000" },
      { name: "1250 pcm", value: "1250" },
      { name: "1500 pcm", value: "1500" },
      { name: "1750 pcm", value: "1750" },
      { name: "2000 pcm", value: "2000" },
      { name: "2500 pcm", value: "2500" },
      { name: "3000 pcm", value: "3000" },
      { name: "3500 pcm", value: "3500" },
      { name: "4000 pcm", value: "4000" },
      { name: "4500 pcm", value: "4500" },
      { name: "5000 pcm", value: "5000" },
      { name: "5500 pcm", value: "5500" },
      { name: "6000 pcm", value: "6000" },
      { name: "6500 pcm", value: "6500" },
      { name: "7000 pcm", value: "7000" },
      { name: "7500 pcm", value: "7500" },
    ],
  },
  {
    placeholder: "Property type",
    queryName: "property_type",
    items: [
      { name: "show All", value: "0" },

      { name: "Flats", value: "flats" },
      { name: "Tarraced", value: "terraced" },
      { name: "Semi detached", value: "semi_detached" },
      { name: "Detached", value: "detached" },
      { name: "Bungalow", value: "bungalow" },
      { name: "Farm/Land", value: "farms_land" },
    ],
  },
];
const Filters = ({ activeFilters }) => {
  const router = useRouter();
  const initialFilters = [
    { name: "area", value: activeFilters["area"] ? activeFilters.area : null },
    {
      name: "radius",
      value: activeFilters["radius"] ? activeFilters.radius : null,
    },
    {
      name: "minimum_beds",
      value: activeFilters["minimum_beds"] ? activeFilters.minimum_beds : null,
    },
    {
      name: "maximum_beds",
      value: activeFilters["maximum_beds"] ? activeFilters.maximum_beds : null,
    },
    {
      name: "minimum_price",
      value: activeFilters["minimum_price"]
        ? activeFilters.minimum_price
        : null,
    },
    {
      name: "maximum_price",
      value: activeFilters["maximum_price"]
        ? activeFilters.maximum_price
        : null,
    },
    {
      name: "property_type",
      value: activeFilters["property_type"]
        ? activeFilters.property_type
        : null,
    },
  ];
  const [filters, setFilters] = useState(initialFilters);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedFilters = filters.filter(
      (el) => el.value !== null && el.value !== "0"
    );
    const query = searchedFilters.reduce((el, next) => {
      return `${el}&${next.name}=${next.value}`;
    }, "/search?listing_status=rent");
    router.push(query);
  };

  const displayFilter = (filter, index) => {
    const { placeholder, queryName, items } = filter;
    if (index === 0) {
      return (
        <div key={queryName} className={styles.filter}>
          <span>{placeholder}</span>
          <input
            type='text'
            placeholder={
              activeFilters[queryName] ? activeFilters[queryName] : "eg. Oxford"
            }
            value={activeFilters[queryName]}
            onChange={(e) => {
              setFilters((prev) => {
                return prev.map((i) => {
                  if (i.name === queryName)
                    return { ...i, value: e.target.value };
                  else return i;
                });
              });
            }}
          />
        </div>
      );
    } else {
      return (
        <div key={queryName} className={styles.filter}>
          <span>{placeholder}</span>
          <select
            name={queryName}
            id={queryName}
            value={activeFilters[queryName] && activeFilters[queryName]}
            onChange={(e) => {
              e.target.value !== "-1" &&
                setFilters((prev) => {
                  return prev.map((i) => {
                    if (i.name === queryName)
                      return { ...i, value: e.target.value };
                    else return i;
                  });
                });
            }}
          >
            {items.map((i) => (
              <option
                key={i.value}
                value={i.value}
                disabled={i.disabled !== undefined ? true : false}
              >
                {i.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
  };
  return (
    <div className={styles.filters}>
      {filtersData.map(displayFilter)}{" "}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filters;
