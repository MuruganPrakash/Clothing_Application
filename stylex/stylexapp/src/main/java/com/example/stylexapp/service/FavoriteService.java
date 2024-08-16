package com.example.stylexapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stylexapp.model.Customer;
import com.example.stylexapp.model.Favorite;
import com.example.stylexapp.model.Product;
import com.example.stylexapp.repository.FavoriteRepository;
import com.example.stylexapp.repository.CustomerRepository;
import com.example.stylexapp.repository.ProductRepository;


@Service
public class FavoriteService {
    @Autowired
    private FavoriteRepository favoriteRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CustomerRepository customerRepository;

    public List<Favorite> getFavorites(int customerId) {
        return favoriteRepository.findByCustomerId(customerId);
    }

      public Favorite addToFavorite(int customerId, int productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        
        Favorite favorite = favoriteRepository.findByCustomerIdAndProductId(customerId, productId)
                .orElse(new Favorite());

        
        if (favorite.getId() == null) {
            favorite.setCustomer(customer);
            favorite.setProduct(product);
        }

        
        return favoriteRepository.save(favorite);
    }

    public void removeFromFavorite(int userId, int productId) {
        favoriteRepository.deleteByCustomer_IdAndProduct_Id(userId, productId);
    }

   

}
