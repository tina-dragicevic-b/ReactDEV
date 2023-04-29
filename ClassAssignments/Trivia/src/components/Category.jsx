const Category = ({selectedCategory, changeCategory, categories}) => {

    return (
      <>
        <label
          className="label"
          style={{
            gridColumn: "1 / 2",
          }}
          htmlFor="category"
        >
          Category
        </label>
        <select
          className="selector"
          style={{ gridColumn: "2 / 3" }}
          value={selectedCategory}
          onChange={changeCategory}
        >
          {categories?.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </>
    );
}; export default Category;