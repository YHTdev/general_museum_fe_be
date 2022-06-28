export interface bookProp{
  id:string;
  name:string;
  categoryId: string;
  pages:string[];
  cover:string;
}

export const books:bookProp[]=[
    {
        id:"1",
        name:"Leaving time",
        categoryId:"",
        cover:"https://images-na.ssl-images-amazon.com/images/I/51awyZJCrfL.jpg",
        pages:[
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, adipisci! Aspernatur eligendi tenetur mollitia aliquam cupiditate obcaecati autem molestiae. Veritatis ab quas dignissimos, nulla nihil voluptatibus provident delectus ipsa rem!",
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, adipisci! Aspernatur eligendi tenetur mollitia aliquam cupiditate obcaecati autem molestiae. Veritatis ab quas dignissimos, nulla nihil voluptatibus provident delectus ipsa rem!"
        ]
    },
    {
        id:"2",
        name:"Time management",
        categoryId:"",
        cover:"https://images-na.ssl-images-amazon.com/images/I/51awyZJCrfL.jpg",
        pages:[
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, adipisci! Aspernatur eligendi tenetur mollitia aliquam cupiditate obcaecati autem molestiae. Veritatis ab quas dignissimos, nulla nihil voluptatibus provident delectus ipsa rem!",
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, adipisci! Aspernatur eligendi tenetur mollitia aliquam cupiditate obcaecati autem molestiae. Veritatis ab quas dignissimos, nulla nihil voluptatibus provident delectus ipsa rem!"
        ]
    }
]



