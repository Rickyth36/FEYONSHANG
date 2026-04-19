import express from 'express';
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateOrderStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin feature
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateOrderStatus);

// Payment feature
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);

// User feature
orderRouter.post('/userorders', authUser, userOrders);

// Verify payments
orderRouter.post('/verifyStripe', authUser, verifyStripe );
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay );

export default orderRouter;