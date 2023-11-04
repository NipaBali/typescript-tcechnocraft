
{

    // Spread Operator
    // Rest Operator [spread er cousine]
    // Destructuring


    // Learn Spread Operator

    const bros1: string[] = [
        'first', 'Second', 'Third'
    ];
    const bros2: string[] = [
        'one', 'two', 'three'
    ];
    bros1.push(...bros2);


    const mentors1 = {
        typesctipt: 'mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Feroz',
        nextjs: 'Tonmoy',
        cloud: 'nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2,
    }


    // Learn Rest Operator

    // const greetFriends = (one : string, two : string, three : string) => {
    //     console.log(`Hi ${one} ${two} ${three}`)
    // }

    const greetFriends = (...friends : string[]) => {
        console.log(friends.forEach((friend) => (console.log(`Hi My Frinds are ${friend}`))))
    }

    greetFriends('First', 'Second', 'Third', 'Four')








}













