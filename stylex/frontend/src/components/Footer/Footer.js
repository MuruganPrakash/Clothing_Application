import React from 'react';
import { Button, Grid, Typography, Link } from '@mui/material';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('div')({
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const FooterSection = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '20px',
});

const FooterColumn = styled('div')({
    flex: '1 1 200px',
    margin: '10px',
    textAlign: 'center',
    '&:not(:last-child)': {
        borderRight: '1px solid #444',
    },
});

const FooterTitle = styled(Typography)({
    marginBottom: '20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
});

const FooterList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    '& li': {
        marginBottom: '10px',
    },
});

const FooterLink = styled(Link)({
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
});

const SocialButton = styled(Button)({
    color: '#fff',
    margin: '5px',
    '&:hover': {
        backgroundColor: '#444',
    },
});

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterColumn>
                    <FooterTitle>ABOUT US</FooterTitle>
                    <FooterList>
                        <li><FooterLink href="#">Who We Are</FooterLink></li>
                        <li><FooterLink href="#">Blog</FooterLink></li>
                        <li><FooterLink href="#">Work With Us</FooterLink></li>
                        <li><FooterLink href="#">Investor Relations</FooterLink></li>
                        <li><FooterLink href="#">Report Fraud</FooterLink></li>
                        <li><FooterLink href="#">Press Kit</FooterLink></li>
                        <li><FooterLink href="#">Contact Us</FooterLink></li>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Stylex</FooterTitle>
                    <FooterList>
                        <li><FooterLink href="#">Shirts</FooterLink></li>
                        <li><FooterLink href="#">Tshirts</FooterLink></li>
                        <li><FooterLink href="#">Sweatshirts</FooterLink></li>
                        <li><FooterLink href="#">Sarees</FooterLink></li>
                        <li><FooterLink href="#">Chudithars</FooterLink></li>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>FOR FRANCHISE</FooterTitle>
                    <FooterList>
                        <li><FooterLink href="#">Partner With Us</FooterLink></li>
                        <li><FooterLink href="#">Apps For You</FooterLink></li>
                    </FooterList>
                    <FooterTitle>FOR ENTERPRISES</FooterTitle>
                    <FooterList>
                        <li><FooterLink href="#">Stylex For Enterprise</FooterLink></li>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>LEARN MORE</FooterTitle>
                    <FooterList>
                        <li><FooterLink href="#">Privacy</FooterLink></li>
                        <li><FooterLink href="#">Security</FooterLink></li>
                        <li><FooterLink href="#">Terms</FooterLink></li>
                        <li><FooterLink href="#">Sitemap</FooterLink></li>
                    </FooterList>
                </FooterColumn>
            </FooterSection>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <FooterTitle>Follow Us</FooterTitle>
                    <SocialButton startIcon={<Facebook />}>Facebook</SocialButton>
                    <SocialButton startIcon={<Twitter />}>Twitter</SocialButton>
                    <SocialButton startIcon={<Instagram />}>Instagram</SocialButton>
                </Grid>
            </Grid>
        </FooterContainer>
    );
};

export default Footer;
