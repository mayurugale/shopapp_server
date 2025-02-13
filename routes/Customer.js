const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');

const router = express.Router();

router.post('/',authenticateToken, addCustomer);
router.get('/',authenticateToken, getAllCustomers);
router.get('/:id',authenticateToken, getCustomerById);
router.put('/:id',authenticateToken, updateCustomer);
router.delete('/:id',authenticateToken, deleteCustomer);

module.exports = router;
