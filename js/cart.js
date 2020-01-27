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

     //Add and remove individual quantities, also display totals
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             //message for when product is added.
             document.getElementsByClassName("p-added")[3].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             //message for when product is added.
             document.getElementsByClassName("p-added")[4].innerHTML = "Added to Cart, go to Checkout?";
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
             document.getElementById("totalCostBeforeVat").innerHTML = vatBeforeString + totalCost;
             document.getElementById("totalCostAfterVat").innerHTML = vatAfterString + (totalCost + vatAmount);
             document.getElementById("vatTotal").innerHTML = vatTotalString + vatAmount;
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
     }

     function couponSubmit() {
         totalIncludingVat = (totalCost + vatAmount);
         discount = totalIncludingVat * 0.10;
         totalWithVatIncludingDiscount = totalIncludingVat - discount;
         document.getElementById("subscribe-confirm").innerHTML = "Your coupon has been Successfully applied!"
         document.getElementById("totalMinDiscount").innerHTML = "Congratulations! You have saved R" + discount +
             " Your updated Total including VAT(R" + vatAmount + ") is R" + totalWithVatIncludingDiscount + ".";

     }
     //jQuery Functions
     //Show/Hide Additonal Product Text
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

     //Hide/View Featured products on index page.
     $(document).ready(function() {
         $("#hide-view-button").click(function() {
             $(".card-deck").toggle();
         });
     });