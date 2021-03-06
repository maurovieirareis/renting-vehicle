import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Vehicle from './model/Vehicle';

import { FooterComponent } from './components/layout/FooterComponent';
import { HeaderComponent } from './components/layout/HeaderComponent';
import { MenuComponent } from './components/layout/MenuComponent';

import {VehicleComponent} from './components/VehicleComponent';

import '../scss/pages/dashboard.scss';

export default class Dashboard {
    public car: Vehicle;
    public motorcycle: Vehicle;

    constructor () {
        this.car = new Vehicle('red', 10, 5, 'Car');
        this.motorcycle = new Vehicle('blue', 2, 2, 'Motorcycle');
        this.init();
    }

    public init(): void {

        ReactDOM.render(
            <HeaderComponent />,
            document.getElementById('header')
        );
        ReactDOM.render(
            <MenuComponent />,
            document.getElementById('sidenav')
        );

        ReactDOM.render(
            <VehicleComponent vehicleType={this.car.vehicleType} color={this.car.color} numWheels={this.car.numWheels} age={this.car.age} />,
            document.getElementById('car')
        );
        ReactDOM.render(
            <VehicleComponent vehicleType={this.motorcycle.vehicleType} color={this.motorcycle.color} numWheels={this.motorcycle.numWheels} age={this.motorcycle.age} />,
            document.getElementById('motorcycle')
        );

        ReactDOM.render(
            <FooterComponent />,
            document.getElementById('footer')
        );
    }
}
new Dashboard();
