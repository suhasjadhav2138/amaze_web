import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TableComponent } from "./components/table/table.component";
import { CodingreviewComponent } from './components/codingreview/codingreview.component';
import { InfocodereviewComponent } from './components/infocodereview/infocodereview.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { CrmodalsComponent } from './components/crmodals/crmodals.component';

// import {SortableColumnComponent} from"./components/sortable-column/sortable-column.component"


export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "codingreview", component: CodingreviewComponent },
  { path: "table", component: InfoTableComponent },
  { path: "info/:id", component: InfocodereviewComponent },
  { path: "modals", component: CrmodalsComponent },



];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
