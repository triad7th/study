import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
      private router : Router,
      private route: ActivatedRoute,
      private productService: ProductService
    ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = this.pageTitle + ` | ${id}`;
    this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find(product => product.productId === id);
        console.log(this.product);
      }
    })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
