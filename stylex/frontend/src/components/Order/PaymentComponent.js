//PaymentComponent.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%);
  }
`;

const PaymentComponent = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === '') {
            alert('Please enter amount');
        } else {
            var options = {
                key: 'rzp_test_jU8iEefJbuWxWG',
                key_secret: '7gySLOzqLY9jQBkn1OwGJ2tx',
                amount: amount * 100,
                currency: 'INR',
                name: 'StyleX App',
                description: 'Clothing delivery',
                handler: function (response) {
                    alert(`Payment ID: ${ response.razorpay_payment_id }`);
                    window.location.href = '/orderconfirmation';

                },
                prefill: {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    contact: '9876543210',
                },
                notes: {
                    address: 'StlyleX App Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };
            var pay = new window.Razorpay(options);
            pay.open();
            pay.on('payment.failed', function (response) {
                alert(`Payment failed: ${ response.error.description }`);
            });
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Proceed Payment</Title>
                <Input
                    type="text"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Button type="submit">Pay Now</Button>
            </Form>
        </Container>
    );
};

export default PaymentComponent;