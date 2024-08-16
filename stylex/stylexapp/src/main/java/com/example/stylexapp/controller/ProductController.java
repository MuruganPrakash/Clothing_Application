package com.example.stylexapp.controller;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.stylexapp.model.Product;
import com.example.stylexapp.service.ProductService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
public class ProductController {
    public ProductService productService;
    public ProductController(ProductService productService)
    {
        this.productService = productService;
    }
    @GetMapping("/getProducts")
    public List<Product> getMethodName() {
        return productService.getProducts();
    }

    @GetMapping("/getProduct/{id}")
    public Product getMethodByid(@PathVariable int id) {
        return productService.getProduct(id);
    }
    @PostMapping("/postProduct")
    public Product postMethodName(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @PutMapping("updateProduct/{id}")
    public Product putMethodName(@PathVariable int id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("deleteProduct/{id}")
    public String deletemethod(@PathVariable int id)
    {
        return productService.deleteProduct(id);
    }

    @GetMapping("/search")
    public List<Product> getSearch(@RequestParam String query) {
        return productService.search(query);
    }

    @GetMapping("/price")
    public List<Product> getMethodName(@RequestParam String start, @RequestParam String end) {
        return productService.findByPrice(start, end);
    }

    @GetMapping("/suggestions")
    public List<String> getSuggestions(@RequestParam String q) {
        List<Product> products = productService.getSuggestions(q);
        return products.stream()
                .map(Product::getType)
                .distinct()
                .collect(Collectors.toList());
        
    }
    
    

}
