package com.example.stylexapp.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stylexapp.model.CartItem;
import com.example.stylexapp.model.Product;
import com.example.stylexapp.repository.CartItemRepository;
import com.example.stylexapp.repository.ProductRepository;
import com.example.stylexapp.repository.CustomerRepository;

@Service
public class CartService {
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CustomerRepository CustomerRepository;

    public List<CartItem> getCartItems(int customerId) {
        return cartItemRepository.findByCustomerId(customerId);
    }

    public CartItem addToCart(int customerId, int productId,String size,int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem cartItem = cartItemRepository.findByCustomerIdAndProductId(customerId, productId)
                .orElse(new CartItem());

        if (cartItem.getId() == null) {
            cartItem.setCustomer(CustomerRepository.findById(customerId).get());
            cartItem.setProduct(product);
            cartItem.setSize(size);
            cartItem.setQuantity(quantity);
        } else {
            cartItem.setQuantity(cartItem.getQuantity() + 1);
        }

        return cartItemRepository.save(cartItem);
    }

    public void removeFromCart(int userId, int productId) {
        cartItemRepository.deleteByCustomer_IdAndProduct_Id(userId, productId);
    }

    public CartItem updateCartItem(int userId, int productId, CartItem updatedItem) {
        CartItem existingCartItem = cartItemRepository.findByCustomerIdAndProductId(userId, productId).orElse(null);
        if (existingCartItem != null) {
            existingCartItem.setQuantity(updatedItem.getQuantity());
            existingCartItem.setSize(updatedItem.getSize());
            return cartItemRepository.save(existingCartItem);
        }
        return null;
    }

    
}
