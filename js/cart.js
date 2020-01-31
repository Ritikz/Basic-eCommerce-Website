     let productQuantity1 = 0;
     let productQuantity2 = 0;
     let productQuantity3 = 0;
     let productQuantity4 = 0;
     let productQuantity5 = 0;

     let productCost1 = 500;
     let productCost2 = 600;
     let productCost3 = 700;
     let productCost4 = 800;
     let productCost5 = 900;

     let total1 = productQuantity1 * productCost1;
     let total2 = productQuantity2 * productCost2;
     let total3 = productQuantity3 * productCost3;
     let total4 = productQuantity4 * productCost4;
     let total5 = productQuantity5 * productCost5;

     let quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
     let totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
     let vatAmount = totalCost * 0.15;
     let vatAfterString = "Your Total Including vat is: R"
     let vatBeforeString = "Your Total Excluding vat is: R"
     let vatTotalString = "Total VAT: R"
     let discountQualify = "Spend R5000* or more to receive 15% of your purchase. *This discount only applies when subscribing to our newsletter."
     let discountAmount = 5000;

     //Add and remove individual quantities, also display and update totals.
     function addP1() {
         if (total1 >= 0) {
             total1 = document.getElementById("product1-total").innerHTML =
                 productQuantity1 += 1;
             //Procede to checkout
             document.getElementById("checkout").innerHTML = "Proceed to Checkout";
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere1").innerHTML = "R" + total1 * productCost1;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             //message for when product is added.
             document.getElementsByClassName("p-added")[0].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                 document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
                }
            else if( (totalCost + vatAmount) >= 5000){
                document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
            }      
         }  
    }

     function minusP1() {
         if (total1 >= 1) {
             total1 = document.getElementById("product1-total").innerHTML =
                 productQuantity1 -= 1;
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere1").innerHTML = "R" + total1 * productCost1;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     //2
     function addP2() {
         if (total2 >= 0) {
             total2 = document.getElementById("product2-total").innerHTML =
                 productQuantity2 += 1;
             //Procede to checkout
             document.getElementById("checkout").innerHTML = "Proceed to Checkout"
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere2").innerHTML = "R" + total2 * productCost2;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             //message for when product is added.
             document.getElementsByClassName("p-added")[1].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     function minusP2() {
         if (total2 >= 1) {
             total2 = document.getElementById("product2-total").innerHTML =
                 productQuantity2 -= 1;
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere2").innerHTML = "R" + total2 * productCost2;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     //3
     function addP3() {
         if (total3 >= 0) {
             total3 = document.getElementById("product3-total").innerHTML =
                 productQuantity3 += 1;
             //Procede to checkout
             document.getElementById("checkout").innerHTML = "Proceed to Checkout"
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere3").innerHTML = "R" + total3 * productCost3;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             //message for when product is added.
             document.getElementsByClassName("p-added")[2].innerHTML = "Added to Cart, go to Checkout?";
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     function minusP3() {
         if (total3 >= 1) {
             total3 = document.getElementById("product3-total").innerHTML =
                 productQuantity3 -= 1;
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere3").innerHTML = "R" + total3 * productCost3;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     //4
     function addP4() {
         if (total4 >= 0) {
             total4 = document.getElementById("product4-total").innerHTML =
                 productQuantity4 += 1
             //Procede to checkout
             document.getElementById("checkout").innerHTML = "Proceed to Checkout"
             //Display Product Total Cost;
             document.getElementById("displayTotalAmountHere4").innerHTML = "R" + total4 * productCost4;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             //message for when product is added.
             document.getElementsByClassName("p-added")[3].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     function minusP4() {
         if (total4 >= 1) {
             total4 = document.getElementById("product4-total").innerHTML =
                 productQuantity4 -= 1;
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere4").innerHTML = "R" + total4 * productCost4;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     //5
     function addP5() {
         if (total5 >= 0) {
             total5 = document.getElementById("product5-total").innerHTML =
                 productQuantity5 += 1;
             //Procede to checkout
             document.getElementById("checkout").innerHTML = "Proceed to Checkout"
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere5").innerHTML = "R" + total5 * productCost5;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             //message for when product is added.
             document.getElementsByClassName("p-added")[4].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     function minusP5() {
         if (total5 >= 1) {
             total5 = document.getElementById("product5-total").innerHTML =
                 productQuantity5 -= 1;
             //Display Product Total Cost
             document.getElementById("displayTotalAmountHere5").innerHTML = "R" + total5 * productCost5;
             //Display Total Quantity
             quantityOfAllProducts = total1 + total2 + total3 + total4 + total5;
             document.getElementById("quantityButton").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             document.getElementById("quantityButtonNav").innerHTML = "Products in Cart: " + quantityOfAllProducts;
             //VAT Amounts
             totalCost = ((productQuantity1 * productCost1) + (productQuantity2 * productCost2) + (productQuantity3 * productCost3) + (productQuantity4 * productCost4) + (productQuantity5 * productCost5));
             vatAmount = totalCost * 0.15;
             document.getElementById("discountMessage").innerHTML = discountQualify;
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
             if ((totalCost + vatAmount) < 5000){
                document.getElementById("discountQualify").innerHTML = "You don't qualify for a discount, spend another R" + (discountAmount - (totalCost + vatAmount)) + " to qualify for discount!"
               }
           else if( (totalCost + vatAmount) >= 5000){
               document.getElementById("discountQualify").innerHTML = "You qualify for a discount!";
           }
         }
     }

     //Reset Cart
     function removeAll() {
         document.getElementById("product1-total").innerHTML = 0;
         document.getElementById("product2-total").innerHTML = 0;
         document.getElementById("product3-total").innerHTML = 0;
         document.getElementById("product4-total").innerHTML = 0;
         document.getElementById("product5-total").innerHTML = 0;

         document.getElementById("totalCostBeforeVat").innerHTML = "";
         document.getElementById("totalCostAfterVat").innerHTML = "";
         document.getElementById("vatTotal").innerHTML = "";

         document.getElementById("displayTotalAmountHere1").innerHTML = "R0.00"
         document.getElementById("displayTotalAmountHere2").innerHTML = "R0.00"
         document.getElementById("displayTotalAmountHere3").innerHTML = "R0.00"
         document.getElementById("displayTotalAmountHere4").innerHTML = "R0.00"
         document.getElementById("displayTotalAmountHere5").innerHTML = "R0.00"

         quantityOfAllProducts = 0;
         document.getElementById("quantityButton").innerHTML = "Your cart is Empty.";
         document.getElementById("quantityButtonNav").innerHTML = "Your cart is Empty.";
         productQuantity1 = 0;
         productQuantity2 = 0;
         productQuantity3 = 0;
         productQuantity4 = 0;
         productQuantity5 = 0;

         productCost1 = 500;
         productCost2 = 600;
         productCost3 = 700;
         productCost4 = 800;
         productCost5 = 900;

         total1 = 0;
         total2 = 0;
         total3 = 0;
         total4 = 0;
         total5 = 0;

         document.getElementsByClassName("p-added")[0].innerHTML = "";
         document.getElementsByClassName("p-added")[1].innerHTML = "";
         document.getElementsByClassName("p-added")[2].innerHTML = "";
         document.getElementsByClassName("p-added")[3].innerHTML = "";
         document.getElementsByClassName("p-added")[4].innerHTML = "";
         document.getElementById("checkout").innerHTML = "";
         document.getElementById("discountQualify").innerHTML = "";
     }

    //Delivery Costs
     let deliveryTotal = 0;
     let cptPerProduct = 100;
     let jhbPerProduct = 150;
     let dbnPerProduct = 200;

     function selectDelivery() {
        var x = document.getElementById("deliverySelect").selectedIndex;
        var y = document.getElementById("deliverySelect").options;
        if (y[x].index === 0){
        document.getElementById("displayDeliveryCost").innerHTML = "You have a total of (" + quantityOfAllProducts + ") products that can be collected at our store. No delivery costs have been included." + " Your total including VAT is R" + totalCost +".";
        }
        else if (y[x].index === 1){
        deliveryTotal = cptPerProduct * quantityOfAllProducts;
        document.getElementById("displayDeliveryCost").innerHTML = "You have a total of (" + quantityOfAllProducts + ") products that will be delivered to the local post office in " + y[x].text +
        "." + " Your total delivery cost is R" + deliveryTotal + ". Your new total including VAT is R" + (deliveryTotal + totalCost) +".";
        }
        else if (y[x].index === 2){
        deliveryTotal = jhbPerProduct * quantityOfAllProducts;
        document.getElementById("displayDeliveryCost").innerHTML = "You have a total of (" + quantityOfAllProducts + ") products that will be delivered to the local post office in " + y[x].text +
        "." + " Your total delivery cost is R" + deliveryTotal + ". Your new total including VAT is R" + (deliveryTotal + totalCost) +".";
        }
        else if (y[x].index === 3){
        deliveryTotal = dbnPerProduct * quantityOfAllProducts;
        document.getElementById("displayDeliveryCost").innerHTML = "You have a total of (" + quantityOfAllProducts + ") products that will be delivered to the local post office in " + y[x].text +
        "." + " Your total delivery cost is R" + deliveryTotal + ". Your new total including VAT is R" + (deliveryTotal + totalCost) +".";
        }
    }

     //jQuery 
     $(document).ready(function() {
         $("#p1-showButton").click(function() { 
             $("#p1-additionalText").toggle(); 
         });
     });

     $(document).ready(function() {
        $("#p2-showButton").click(function() { 
            $("#p2-additionalText").toggle(); 
        });
    });

    $(document).ready(function() {
        $("#p3-showButton").click(function() { 
            $("#p3-additionalText").toggle(); 
        });
    });

    $(document).ready(function() {
        $("#p4-showButton").click(function() { 
            $("#p4-additionalText").toggle(); 
        });
    });

    $(document).ready(function() {
        $("#p5-showButton").click(function() { 
            $("#p5-additionalText").toggle(); 
        });
    });
  
     //Hide Show Featured products on index page.
     $(document).ready(function() {
         $("#hide-view-button").click(function() {
             $(".card-deck").toggle();
         });
     });

     //Hide Show Product UI & Cart
     $(document).ready(function() {
        $(".p-added").click(function() {
            $("#card-deck-hide").show();
            $("#checkoutHeader").hide();
            $("#hide-product-ui").hide();
            $("#coupon").hide();    
        });
    });

//Procede to Checkout 
    $(document).ready(function() {
        $("#checkout").click(function() {
            $("#card-deck-hide").hide();
            $("#checkoutHeader").show();
            $("#hide-product-ui").hide();
            $("#contactInfo").show();
            $("#coupon").hide();
            $("#deliverySelect").hide();
            $("#delivery-confirm").hide(); 
            $("#personalSubmit").hide(); 
        });
    });

    //Show proceed in contact information
    $(document).ready(function() {
        $("#confirmContact").click(function() {
            let emailValue = document.getElementById("email").value;
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let cellNum = document.getElementById("cellNum").value;
            if (emailValue != "" && fname != "" && lname != "" && cellNum != "") {
                $("#personalSubmit").show();
                $("#incorrect").hide();
            }
            else {
                document.getElementById("incorrect").innerHTML = "Please enter all your details to continue.";
            }
        });
    });
    
    //Contact Info 
    $(document).ready(function() {
        $("#personalSubmit").click(function() {
            $("#contactInfo").hide(); 
            $("#deliverySelect").show();
            $("#delivery-confirm").show();
            $("#final-proceed").show();
        });
    });
    
//Delivery Select
    $(document).ready(function() {
        $("#personalSubmit").click(function() {
            $("#card-deck-hide").hide();
            $("#checkoutHeader").hide();
            $("#deliveryHeader").show();
            $("#hide-product-ui").hide();
            $("#deliveryForm").hide(); 
        });
    });

//Newsletter Agree 
$(document).ready(function() {
    $("#final-proceed").click(function() {
        $("#card-deck-hide").hide();
        $("#checkoutHeader").hide();
        $("#hide-product-ui").hide();
        $("#deliveryForm").hide();
        $("#deliverySelect").hide();
        $("#delivery-confirm").hide();
        $("#coupon").show();
        $("#couponHeader").show();
        $("#final-proceed").hide();
        $("#displayDeliveryCost").hide(); 
        $("#deliveryHeader").hide();
        //Qualify for discount
        if (totalCost >= 5000) {
            document.getElementById("moreThan5000").innerHTML = "Your Cart is worth more than R5000 - Currently (R" + (totalCost + vatAmount + deliveryTotal) + ") including delivery cost of (R" + deliveryTotal + ") you therefore qualify for a 15% discount *(calculated on product cost only) of (R" +((totalCost + vatAmount) * 0.15) + ") if you agree to receive our weekly newsletter. Your new total would then be R" +((totalCost+vatAmount)-((totalCost + vatAmount) * 0.15)+deliveryTotal) + " Do you agree?"
            $("#moreThan5000").show();
            $("#newsletter-yes").show();
            $("#newsletter-no").show();
        //Not qualify for discount    
        }
        else {
            $("#lessThan5000").show();
            document.getElementById("moreThan5000").innerHTML = "You have spent less than R5000 and don't qualify for a discount"
            $("#final").show();
            $("#costBreakdownWithoutDiscount").show();
        }
    });
});

// Discount Qualify and accept
$(document).ready(function() {
    $("#newsletter-yes").click(function() {
        document.getElementById("qualifyAndAcceptMessage").innerHTML = "Thank you for subscribing to our newsletter! Your newsletters will be sent to: " + document.getElementById("email").value;
        $("#qualifyAndAcceptMessage").show();
        $("#final").show();
        $("#costBreakdownWithDiscount").show();
        $("#newsletter-yes").hide();
        $("#newsletter-no").hide();
        $("#moreThan5000").hide();
    });
});

//View cost breakdown with discount
$(document).ready(function() {
    $("#costBreakdownWithDiscount").click(function() {
        document.getElementById("finalSummaryIncludingDiscount").innerHTML = "Your totals are: Total exc. VAT: R" + (totalCost)
        + ". Total inc. VAT: R" + (totalCost+vatAmount) + ". VAT: R" + vatAmount + ". 15% Discount: R" + ((totalCost + vatAmount) * 0.15) + ". Delivery: R" + deliveryTotal + ". Total Including Delivery: R" +
        ((totalCost+vatAmount)+deliveryTotal) +". Total Including Delivery with discount: R" + (((totalCost + vatAmount) + deliveryTotal) - ((totalCost + vatAmount) * 0.15));
        $("#finalSummaryIncludingDiscount").show();
        $("#qualifyAndAcceptMessage").hide();
    });
});

//View cost breakdown with without discount
$(document).ready(function() {
    $("#costBreakdownWithoutDiscount").click(function() {
        document.getElementById("finalSummaryWithoutDiscount").innerHTML = "Your totals are: Total exc. VAT: R" + (totalCost)
        + ". Total inc. VAT: R" + (totalCost+vatAmount) + ". VAT: R" + vatAmount + ". Delivery: R" + deliveryTotal + ". Total Including Delivery: R" +
        ((totalCost+vatAmount)+deliveryTotal) +".";
        $("#finalSummaryWithoutDiscount").show();
    });
});

//Discount Qualify and reject discount/newsletter
$(document).ready(function() {
    $("#newsletter-no").click(function() {
        $("#costBreakdownWithoutDiscount").show();
        $("#newsletter-yes").hide();
        $("#newsletter-no").hide();
        $("#moreThan5000").hide();
        $("#final").show();
        document.getElementById("qualifyAndRejectMessage").innerHTML = "Pitty, what a waste!";
        $("#qualifyAndRejectMessage").show();
    });
});

//Checkout Final
  $(document).ready(function() {
        $("#final").click(function() {
        let refNum = Math.floor((Math.random() * 100000) + 1);
        alert("Thank you for your purchase. Your reference number is: #" + refNum)
        $("#final").hide();
        $("#costBreakdownWithDiscount").hide();
        $("#costBreakdownWithoutDiscount").hide();
        $("#moreThan5000").hide();
        $("#couponHeader").hide();
        $("#finalSummaryWithoutDiscount").hide();
        $("#finalSummaryIncludingDiscount").hide();
        $("#home").show();
        $("#qualifyAndAcceptMessage").hide();
         });
    });

//Generate reference number on submit
function referenceNum() {
    let refNum = Math.floor((Math.random() * 100000) + 1);
    alert("Thank you for your purchase. Your reference number is: #" + refNum)
    }

//Todo
//Back to cart
//Change delivery details
//After checkout, link to home & Reset Cart
//Contact details required before proceeding

    //Cart 
    $(document).ready(function() {
        $(".quickAddButtons").click(function() {
            $(".p-added").show();
        });
    });

    $(document).ready(function() {
        $(".removeAllFromCart").click(function() {
          $("#checkout").hide();
            
        });
    });

    $(document).ready(function() {
        $(".viewPorductButton").click(function() {
            $("#checkout").show();
            
        });
    });


