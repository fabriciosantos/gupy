import { Experiencias } from './../../User';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User, Formacoes } from '../../User';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public user: User = new User();
  public experiencia: Experiencias = new Experiencias();
  public formacao: Formacoes = new Formacoes();
  public formUser: FormGroup;
  public formExperiencias: FormGroup;
  public formFormacoes: FormGroup;
  public tipoSolicitacao = 'create'; // default
  //public tipoSolicitacao = 'update'; // If Update

  public mockUser =
    {
      'id': 1,
      'nome': 'João Santos',
      'foto': '',
      'nascimento': '01/01/2000',
      'genero': 'Masculino',
      'email': 'joao@gmail.com',
      'telefone': '11 2345-6789',
      'endereco': 'Rua do centro n123',
      'cidade': 'São Paulo',
      'estado': 'SP',
      'latitude': '129387123',
      'longitude': '982371982713',
      'tags': 'Desenvolvedor java, JavaEE, NodeJs'
    };

  public mockExperiencias = [
    {
      'userid': '1',
      'empresa': 'Gupy',
      'cargo': 'desenvolvedor',
      'inicio': '1997-09-07',
      'saida': '2017-10-01',
      'atividades': 'Dragon-Bears are wild and ferocious creatures, but also have a gentle, nurturing side'
    },
    {
      'userid': '1',
      'empresa': 'gupy',
      'cargo': 'analista',
      'inicio': '2001-12-03',
      'saida': '2009-08-02',
      'atividades': 'Lene-Cows are canny and stealthy, and beguiled almost everyone they meet.'
    }
  ];

  public mockFormacoes = [
    {
      'userid': '1',
      'instituicao': 'Alura',
      'curso': 'desenvolvedor java',
      'inicio': '1997-09-07',
      'termino': '2017-10-01'
    },
    {
      'userid': '1',
      'instituicao': 'Alura',
      'curso': 'java',
      'inicio': '2001-12-03',
      'termino': '2009-08-02'
    }
  ];

  constructor(private userservice: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.formExperiencias = this.fb.group({
      experiencias: this.fb.array([this.initExperiencias()])
    });
    this.formFormacoes = this.fb.group({
      frmformacoes: this.fb.array([this.initFormacoes()])
    });
    this.createForms();
    if (this.tipoSolicitacao === 'update') {
      this.patchForm();
    }
  }

  patchForm() {
    this.formExperiencias.patchValue({
      experiencias: this.mockExperiencias
    })
    this.setExperiencias();
    this.setFormacoes();
    this.setUse();
  }

  setUse() {
 
  }

  setExperiencias() {
    let control = <FormArray>this.formExperiencias.controls.experiencias;
    for (var i = 0; i < this.mockExperiencias.length; i++) {
      let values = this.fb.group({
        userid: [this.mockExperiencias[i].userid],
        empresa: [this.mockExperiencias[i].empresa],
        cargo: [this.mockExperiencias[i].cargo],
        inicio: [this.mockExperiencias[i].inicio],
        saida: [this.mockExperiencias[i].saida],
        atividades: [this.mockExperiencias[i].atividades],
      });
      (<FormArray>this.formExperiencias.controls['experiencias']).push(values);
    }
  }

  setFormacoes() {
    let control = <FormArray>this.formFormacoes.controls.frmformacoes;
    for (var i = 0; i < this.mockFormacoes.length; i++) {
      let values = this.fb.group({
        userid: [this.mockFormacoes[i].userid],
        instituicao: [this.mockFormacoes[i].instituicao],
        curso: [this.mockFormacoes[i].curso],
        inicio: [this.mockFormacoes[i].inicio],
        termino: [this.mockFormacoes[i].termino],
      });
      (<FormArray>this.formFormacoes.controls['frmformacoes']).push(values);
    }
  }

  createForms() {
    this.formUser = this.fb.group({
      nome: ['', Validators.required],
      foto: '',
      nascimento: '',
      genero: '',
      email: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      latitude: '',
      longitude: '',
      tags: ''
    });

  }

  createUser(data) {
    this.user.nome = data.formUser.value.nome;
    this.user.nascimento = data.formUser.value.nascimento;
    this.user.endereco = data.formUser.value.endereco;
    this.user.email = data.formUser.value.email;
    this.user.genero = data.formUser.value.genero;
    this.user.latitude = data.formUser.value.latitude;
    this.user.longitude = data.formUser.value.longitude;
    this.user.tags = data.formUser.value.tags;
    this.user.telefone = data.formUser.value.telefone;

  }

  initExperiencias() {
    return this.fb.group({
      userid: '',
      empresa: '',
      cargo: '',
      inicio: '',
      saida: '',
      atividades: ''
    });
  }

  initFormacoes() {
    return this.fb.group({
      userid: '',
      instituicao: '',
      curso: '',
      inicio: '',
      termino: ''
    });
  }

  salvar(data) {
    //console.log(this.formUser);
    //console.log(this.formExperiencias);
    //console.log(this.formFormacoes);
    this.createUser(data);
    this.userservice.addUser(this.user);
    this.router.navigate(['index']);
  }

  addExperiencia() {
    const control = <FormArray>this.formExperiencias.controls['experiencias'];
    control.push(this.initExperiencias());
  }

  removeExperiencias(index: number) {
    const control = <FormArray>this.formExperiencias.controls['experiencias'];
    control.removeAt(index);
  }

  addFormacao() {
    const control = <FormArray>this.formFormacoes.controls['frmformacoes'];
    control.push(this.initFormacoes());
  }

  removeFormacao(index: number) {
    const control = <FormArray>this.formFormacoes.controls['frmformacoes'];
    control.removeAt(index);
  }
}
