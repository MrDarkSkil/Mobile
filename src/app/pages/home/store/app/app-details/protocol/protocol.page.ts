import {Component, Input} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ProtocolService} from '../../../../../../services/protocol/protocol.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.page.html',
  styleUrls: ['./protocol.page.scss'],
})
export class ProtocolPage {

  @Input() moduleId: string;
  private todo: FormGroup;

  public inputs = [];

  constructor(private modalCtrl: ModalController, private navParams: NavParams,
              private protocolService: ProtocolService, private formBuilder: FormBuilder) {
    const moduleId = navParams.get('moduleId');

    this.protocolService.getModuleForm(moduleId).then(result => {
      this.inputs = result;
    }).catch(error => {
      console.log('PROTOCOL ERROR:', error);
    });

    const object = {};

    this.inputs.forEach((input) => {
      if (input.type === 'toggle') {
        object[input.name] = new FormControl(input.value ? input.value : false);
      } else if (input.type === 'input') {
        object[input.name] = new FormControl(input.value ? input.value : '');
      } else if (input.type === 'dropdown') {
        object[input.name] = new FormControl(input.value ? input.value : '0');
      } else {
        object[input.name] = new FormControl(input.value ? input.value : '');
      }
    });


    this.todo = this.formBuilder.group(object);
  }

  public close() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  logForm() {
    this.protocolService.sendModuleFormData(this.navParams.get('moduleId'), this.todo.value);
    console.log(this.todo.value);
  }

}
