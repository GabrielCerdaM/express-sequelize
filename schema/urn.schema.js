const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(100);
const wood_type = Joi.string().min(3).max(50);
const model = Joi.string().min(2).max(80);
const sell_status = Joi.string().valid('available', 'reserved', 'sold', 'out_of_stock').default('available');
const status = Joi.string().valid('perfect', 'fixable', 'damaged', 'repaired', 'unknown').default('perfect');
const urn_type = Joi.string().valid('carved', 'smooth', 'complete').allow(null, '').default(null);
const carved_detail = Joi.string().allow(null, '').max(500); // puedes ajustar max
const images = Joi.string().allow(null, '').max(1000); // puedes ajustar max, formato: "url1
const price = Joi.number().integer().min(0).max(10000000);
const provider = Joi.string().min(2).max(100).allow(null, '');
const location = Joi.string().valid('store', 'shop');
const position_store = Joi.number().allow(null);
const received_at = Joi.date().iso().allow(null); // YYYY-MM-DD
const observations = Joi.string().allow(null, '').max(500); // puedes ajustar max

const urnCreateSchema = Joi.object({
  id: id.optional(),
  name: name.required(),
  wood_type: wood_type.required(),
  model: model.required(),
  sell_status: sell_status.required(),
  status: status.required(),
  urn_type: urn_type.required(),
  carved_detail: carved_detail.required(),
  images: images.required(),
  price: price.required(),
  provider: provider,
  location: location.required(),
  position_store: position_store.optional(),
  received_at: received_at.optional(),
  observations: observations,
});

const updateUrnSchema = urnCreateSchema.fork(
  Object.keys(urnCreateSchema.describe().keys),
  field => field.optional()
);

module.exports = {
  urnCreateSchema,
  updateUrnSchema,
};

