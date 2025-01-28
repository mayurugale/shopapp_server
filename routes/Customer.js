const express = require('express');
const {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');

const router = express.Router();

router.post('/', addCustomer);
router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
