/*
  Написать медиатор для группы студентов.

  Профессор отвечает только на вопросы старосты.

  У Студента есть имя и группа которой он пренадлежит.
  Он может запросить старосту задать вопрос или получить ответ.

  Староста может добавлять студентов в группу и передавать вопрос профессору.
*/

const Mediator = () => {

  // console.log( 'your code ');

  class Professor {
    answerTheQuestion( student, question ){
      if( student.type !== 'monitor'){
        console.error('It\' not your bussines');
        return 'It\' not your bussines';
      } else {
        console.log('Yes, my dear?!');
        return 'Yes, my dear?!';
      }
    }
  }

  class Student {
    constructor(name){
      this.name = name;
      this.type = 'nerd';
      this.monitor = null;

      console.log(`New student ${this.name} enrolled`);
    }
    //получить ответ
    getAnswer(answer, from){
      console.log(`${from.name} to ${this.name} professor said: ${answer}`)
    }
    //задать вопрос
    tipTheMonitor(question){
      console.log(`${this.name} asks: ${question} `);
      this.monitor.askProfessor(question, this)
    }
  }


  // Monitor == Староста
  class Monitor extends Student{
    constructor(name, professor){
      super(name);
      this.type = 'monitor';
      this.group = {};
      this.professor = professor;
    }
    //добавить в группу
    addToGroup(student){
      this.group[student.name] = student;
      student.monitor = this;
    }
    //спросить проффесора
    askProfessor(question, student){
      let answer = this.professor.answerTheQuestion( this, question );
      student.getAnswer(answer, this)
    }
  }
  const Prof = new Professor();
  let Pavel = new Student ('Pavel');
  let Viktor = new Monitor ('Viktor', Prof);
  Viktor.addToGroup(Viktor);
  Viktor.addToGroup(Pavel);

  console.log ('Pavel',Pavel)

  Pavel.tipTheMonitor('How are you?');
}

export default Mediator;
