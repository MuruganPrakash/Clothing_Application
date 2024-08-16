package com.example.stylexapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.stylexapp.model.Product;
import com.example.stylexapp.repository.ProductRepository;

@Service
public class ProductService {
     public ProductRepository productRepository;

    public ProductService(ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(int id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product updateProduct(int id, Product product) {
        if (this.findProduct(id) == null) {
            return null;
        }
        product.setId(id);
        return productRepository.save(product);
    }

    public String deleteProduct(int id) {
        if (this.findProduct(id) == null) {
            return "Invalid Id";
        }
        productRepository.deleteById(id);
        return "Product with id " + id + " is deleted Successfully";
    }

    public Product findProduct(int id) {
        return productRepository.findById(id).orElse(null);
    }

    public List<Product> search(String query)
    {
        return productRepository.findByTypeContainingIgnoreCaseOrBrandContainingIgnoreCase(query, query);
    }

    public List<Product> findByPrice(String start,String end)
    {
        return productRepository.findByPrice(start, end);
    }

    public List<Product> getSuggestions(String query) {
        return productRepository.findByTypeContainingIgnoreCase(query);
    }
    
}
