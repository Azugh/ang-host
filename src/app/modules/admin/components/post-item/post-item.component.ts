import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {

  postItemForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile!: File | null;
  imagePreview!: string | ArrayBuffer | null;
  listOfOption: Array<{ label: string; value: string }> = [];
  // listOfItemName = ["Найдемся", "Быстрый Гонсалез"];
  listOfADR = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.postItemForm = this.fb.group({
      itemName: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      ATK: [null, Validators.required],
      DEF: [null, Validators.required],
      REZ: [null, Validators.required],
    })
  }

  postItem() {
    console.log(this.postItemForm.value);

    this.isSpinning = true;
    const formData: FormData = new FormData();
    const tagControl = this.postItemForm.get('itemName');

    // formData.append('img', this.postItemForm.get('photo')?.value);
    formData.append('itemName', this.postItemForm.get('itemName')?.value);
    formData.append('description', this.postItemForm.get('description')?.value);
    formData.append('price', this.postItemForm.get('price')?.value);
    formData.append('ATK', this.postItemForm.get('ATK')?.value);
    formData.append('DEF', this.postItemForm.get('DEF')?.value);
    formData.append('REZ', this.postItemForm.get('REZ')?.value);
    console.log(formData);
    this.adminService.postItem(formData).subscribe((res) => {
      this.isSpinning = false;
      this.message.success("Предмет был успешно добавлен",
        { nzDuration: 5000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    }, error => {
      this.isSpinning = false;
      this.message.error("Ошибка во время, во время добавления предмета",
        { nzDuration: 5000 });
    })

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile!);
  }


}
