import {Component, Input} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ProtocolService} from '../../../../../../services/protocol/protocol.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.page.html',
  styleUrls: ['./protocol.page.scss'],
})
export class ProtocolPage {

  @Input() moduleId: string;
  private dataToSend = new Map();
  private todo: FormGroup;
  public values = [
    {
      type: 'toggle',
      name: 'show_media',
      placeholder: 'Voulez-vous afficher ce media ?',
      required: false,
      values: true,
      value: true,
    },
    {
      type: 'toggle',
      name: 'media',
      placeholder: 'Voulez-vous afficher ce media ?',
      required: false,
      values: true,
      value: false,
    },
    {
      type: 'input',
      name: 'email',
      placeholder: 'Votre adresse email',
      required: true,
      values: true,
      value: 'Kek'
    },
    {
      type: 'dropdown',
      name: 'option',
      placeholder: 'Quelle option ?',
      required: false,
      values: [
        {
          text: 'Option 1',
          value: 1
        },
        {
          text: 'Option 2',
          value: 2
        }
      ],
      value: 2
    }
  ];

  constructor(private modalCtrl: ModalController, private navParams: NavParams,
              private protocolService: ProtocolService, private formBuilder: FormBuilder) {
    const moduleId = navParams.get('moduleId');

    /*this.protocolService.getModuleForm(moduleId).then(result => {
      console.log('kek');
    });*/

    this.todo = this.formBuilder.group({
      value: [''],
    });
  }

  public close() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  logForm() {
    console.log(this.todo.value);
  }

  public sendData() {
  }

}
