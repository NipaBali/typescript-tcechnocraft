
{
    //

    // Union types

    type FrontEndDeveloper = 'fakibazDeveloper' | 'JuniorDeveloper';
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
    type developer = FrontEndDeveloper | FullStackDeveloper;

    const newDeveloper : FrontEndDeveloper = 'JuniorDeveloper';



    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'Female';
        blood: '0' | 'B' | 'B+';
    }

    const user1 : User = {
        name: 'nipa',
        gender: 'male',
        blood: '0'
    }


    // Intersection types

    type developer1 = {
        skills: string[];
        designation1: 'Front End Developer';
    }

    type developer2 = {
        skills: string[];
        designation2: 'backEnd Developer';
    }


    type FullDeveloper = developer1 & developer2;

    const fulldeveloper : FullDeveloper = {
        skills: ['html', 'css', 'javascript'],
        designation1: 'Front End Developer',
        designation2: 'backEnd Developer',
    }








    //
}






