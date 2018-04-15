export class Game {
   
    Players: User[] = [
        { Name: 'Ashley Suchy', MyQuotes: [] },
        { Name: 'Moshe Plotkin', MyQuotes: []},
        { Name: 'John Smith',MyQuotes: []},
    ];
    Dealer:string="Ashley Suchy";
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [
        {Text: "That's fake news", PlayerName:'John Smith', Chosen:false}
    ];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}