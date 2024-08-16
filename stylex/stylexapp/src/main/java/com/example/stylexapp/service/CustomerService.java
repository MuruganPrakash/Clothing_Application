package com.example.stylexapp.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.stylexapp.model.Customer;
import com.example.stylexapp.repository.CartItemRepository;
import com.example.stylexapp.repository.CustomerRepository;


@Service
public class CustomerService {
    public CustomerRepository customerRepository;
    public CartItemRepository cartItemRepository;
    public CustomerService(CustomerRepository customerRepository,CartItemRepository cartItemRepository)
    {
        this.customerRepository = customerRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomer(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(int id, Customer customer) {
        if (this.findCustomer(id) == null) {
            return null;
        }
        customer.setId(id);
        return customerRepository.save(customer);
    }

    public String deleteCustomer(int id) {
        if (this.findCustomer(id) == null) {
            return "Invalid Id";
        }
        cartItemRepository.deleteByCustomerId(id);
        customerRepository.deleteById(id);
        return "Customer with id " + id + " is deleted Successfully";
    }

    public Customer findCustomer(int id) {
        return customerRepository.findById(id).orElse(null);
    }
}
