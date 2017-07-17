import React from 'react';
import { arrayOf, object } from 'prop-types';

const Cart = ({
  items,
  style,
  tax,
  shipping
}) => {
  const addItem = () => true;
  const removeItem = () => false;
  return (
    <div
      className='rc_cart'
      style={ style }
    >
      {
        items.length < 1 &&
        <div class="alert alert-warning" role="alert">
          Your cart is empty
        </div>
      }

      {
        items.length > 0 &&
        <div class="table-responsive col-lg-12">
          <table class="table table-striped ngCart cart">

              <thead>
              <tr>
                  <th></th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Total</th>
              </tr>
              </thead>
              <tfoot>
              <tr ng-show="ngCart.getTax()">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Tax ({{ ngCart.getTaxRate() }}%):</td>
                  <td>{{ ngCart.getTax() | currency }}</td>
              </tr>
              <tr ng-show="ngCart.getShipping()">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Shipping:</td>
                  <td>{{ ngCart.getShipping() | currency }}</td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td>{{ ngCart.totalCost() | currency }}</td>
              </tr>
              </tfoot>
              <tbody>
              <tr ng-repeat="item in ngCart.getCart().items track by $index">
                  <td><span ng-click="ngCart.removeItemById(item.getId())" class="glyphicon glyphicon-remove"></span></td>

                  <td>{{ item.getName() }}</td>
                  <td><span class="glyphicon glyphicon-minus" ng-class="{'disabled':item.getQuantity()==1}"
                            ng-click="item.setQuantity(-1, true)"></span>&nbsp;&nbsp;
                      {{ item.getQuantity() | number }}&nbsp;&nbsp;
                      <span class="glyphicon glyphicon-plus" ng-click="item.setQuantity(1, true)"></span></td>
                  <td>{{ item.getPrice() | currency}}</td>
                  <td>{{ item.getTotal() | currency }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        }
    </div>
  );
};


Cart.propTypes = {
  items: arrayOf(object).isRequired,
  style: object,
};

export default Cart;
