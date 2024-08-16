package com.example.stylexapp.controller;




import com.example.stylexapp.model.Orders;
import com.example.stylexapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService OrderService;

    @GetMapping("getOrders")
    public List<Orders> getOrders() {
        return OrderService.getOrders();
    }
    
    @GetMapping("getOrder/{id}")
    public Orders getOrderByID(@PathVariable int id) {
        return OrderService.getOrder(id);
    }

    @PostMapping("/addOrder")
    public Orders addOrder(@RequestBody Orders orders ) {
        return OrderService.saveOrder(orders);
    }

 
}
