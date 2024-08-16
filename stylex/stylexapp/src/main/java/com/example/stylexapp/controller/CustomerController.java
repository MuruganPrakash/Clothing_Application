package com.example.stylexapp.controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.stylexapp.model.Customer;
import com.example.stylexapp.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
    public CustomerService customerService;
    public CustomerController(CustomerService customerService)
    {
        this.customerService = customerService;
    }
    @GetMapping("/getCustomers")
    public List<Customer> getMethodName() {
        return customerService.getCustomers();
    }

    @GetMapping("/getCustomer/{id}")
    public Customer getMethodByid(@PathVariable int id) {
        return customerService.getCustomer(id);
    }
    @PostMapping("/postCustomer")
    public Customer postMethodName(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @PutMapping("updateCustomer/{id}")
    public Customer putMethodName(@PathVariable int id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @DeleteMapping("deleteCustomer/{id}")
    public String deletemethod(@PathVariable int id)
    {
        return customerService.deleteCustomer(id);
    }


}
