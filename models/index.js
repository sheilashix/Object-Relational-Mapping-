// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const category=require('./category');
const Tag=require('./tag');
const ProductTag=require('./ProductTag');

// Products belongsTo Category
product.belongsTo(category,{
foreignkey:"category_id"
});

// Products belongToMany Tags (through ProductTag)
product.belongsToMany(Tag,{

  through:
  ProductTag,
  foreignkey:"product_id"
});

// Tags belongToMany Products (through ProductTag)
category.hasMany(product,{
foreignKey:"category_id"

});
Tag.belongsToMany(product,{
through:
ProductTag,
foreignKey:"tag_id"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
