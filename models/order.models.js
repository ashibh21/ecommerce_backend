import mongoose from "mongoose";
import { Category } from "./category.models";
import { Product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: NUmber,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
