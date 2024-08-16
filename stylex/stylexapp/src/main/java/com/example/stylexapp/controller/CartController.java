package com.example.stylexapp.controller;



import com.example.stylexapp.model.CartItem;
import com.example.stylexapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("getCart/{userId}")
    public List<CartItem> getCartItems(@PathVariable int userId) {
        return cartService.getCartItems(userId);
    }

    @PostMapping("/addCart")
    public CartItem addCartItem(@RequestParam int userId, @RequestParam int productId, @RequestParam String size,
            @RequestParam int quantity ) {
        return cartService.addToCart(userId, productId,size, quantity);
    }

    @DeleteMapping("/removeCart")
    public String removeFromCart(@RequestParam int userId, @RequestParam int productId) {
        cartService.removeFromCart(userId, productId);
        return "Deleted succesfully";
    }

    @PutMapping("/updateCart")
    public CartItem updateCartItem(
            @RequestParam int userId,
            @RequestParam int productId,
            @RequestBody CartItem updatedItem) {
        return cartService.updateCartItem(userId, productId, updatedItem);
    }
}
