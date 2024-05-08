const express = require('express');
const router = express.Router();

const MENU = [
    {
        id: 'm1',
        name: 'Hamburguesa con queso',
        description: 'Deliciosa hamburguesa con queso cheddar',
        price: 10.99
    },
    {
        id: 'm2',
        name: 'Pizza de pepperoni',
        description: 'Pizza con salsa de tomate, queso mozzarella y pepperoni',
        price: 12.99
    },
    {
        id: 'm3',
        name: 'Ensalada César',
        description: 'Ensalada con lechuga romana, parmesano y aderezo César',
        price: 8.99
    }
];

router.get('/', (req, res, next) => {
    res.send(MENU);
});

router.get('/:mid', (req, res, next) => {
    const menuItem = MENU.find(item => item.id === req.params.mid);
    res.send(menuItem);
});

module.exports = router;
