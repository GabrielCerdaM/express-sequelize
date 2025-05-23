const generateUser = () => {
  const { faker } = require('@faker-js/faker')

  const user = {
    id: faker.string.uuid(),
    email: faker.person.firstName(),
    password: faker.string.alphanumeric({ length: { min: 6, max: 12 } }),
    createdAt: faker.date.anytime()
  }

  return user;
}


const generateService = () => {
  const { faker } = require('@faker-js/faker')

  const URNAS = ['Básica', 'Pino', 'Pino fino', 'Radal']
  const VELATORIOS = ['Básica', 'Velas', 'Pilar de Cristal']
  const VALORES = [900000, 1200000, 1600000, 2000000]
  const CARROZA = ['BMV', 'Hyundai', 'Dodge']
  const VELATORIO = ['Hogar', 'Asilo', 'Hospital', 'Dirección X']
  const CEREMONIA = ['Iglesia Merced', 'Catedral', 'Iglesia Chocalan', 'Iglesia San Pedro']
  const CEMENTERIO = ['Cementerio Municipal de Melipilla', 'Las Flores', 'Las Rosas']
  const DATE = faker.date.between({ from: '2022-01-01', to: '2024-11-10' })
  const datetime = new Date(DATE);
  console.log({ datetime });
  datetime.setHours(15, 0, 0)
  console.log({ datetime });

  const urna_precio = [faker.number.int({ min: 0, max: 3 })];

  return {
    id: faker.string.uuid(),
    type: URNAS[faker.number.int({ min: 0, max: 3 })],
    price: VALORES[urna_precio],
    installed: datetime,
    velatory: VELATORIO[faker.number.int({ min: 0, max: 3 })],
    place_ceremony: CEREMONIA[faker.number.int({ min: 0, max: 3 })],
    time_ceremony: datetime,
    place_cementery: CEMENTERIO[faker.number.int({ min: 0, max: 2 })],
    time_cementery: datetime,
  }

  // const service = {
  //   id: faker.string.uuid(),
  //   contratante_id: faker.string.uuid(),
  //   nombre_fallecido: faker.person.firstName(),
  //   apellido_fallecido: faker.person.lastName(),
  //   rut_fallecido: faker.string.alphanumeric,
  //   fecha_defuncion: faker.date.recent().toISOString().split('T')[0],
  //   tipo_urna: URNAS[urna_precio],
  //   tipo_instalacion: VELATORIOS[faker.number.int({ min: 0, max: 2 })],
  //   venta: VALORES[urna_precio],
  //   carroza: CARROZA[faker.number.int({ min: 0, max: 2 })],
  //   velatorio: VELATORIO[faker.number.int({ min: 0, max: 3 })],
  //   velatorio_hora: undefined,
  //   ceremonia: CEREMONIA[faker.number.int({ min: 0, max: 3 })],
  //   ceremonia_hora: datetime.getHours() + ":" + (datetime.getMinutes() ? '0' : '00'),
  //   cementerio: CEMENTERIO[faker.number.int({ min: 0, max: 2 })],
  //   cementerio_hora: datetime.getHours() + 2 + ":" + (datetime.getMinutes() ? '0' : '00'),
  //   acompanamiento: true,
  //   publicacion: true,
  //   tarjetas: true,
  // }

  // return service
}

module.exports = { generateService, generateUser }
