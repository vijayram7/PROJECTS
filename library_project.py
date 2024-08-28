books = {'A':10, 'B':0, 'C':5 }
user = {"name":"vijay", "phone":7339357903, "no_of_books":2,"books_taken":["A","C"]}

while True:
    print("-------------")
    print("""Enter a Number Between 1 to 5
    1st Number will display the details of book
    2nd Number will display the details of user
    3rd Number will borrow a book
    4th Number will return a book
    5th Number will Get exit from the library""")
    n = int(input("Enter a Number:"))
    if n==1:
        print("This is a books details")
        print(f'Book_name   No.of.books')
        for key,value in books.items():

            print(f'   {key}            {value}')

    elif n ==2:
        print("This is user details")
        for k,v in user.items():
            print(f'{k}:{v}')
        if user["no_of_books"]==0:
            print("you did not borrow any book")
        elif user["no_of_books"]!=0:
            print(f'Number of books taken is:{user["no_of_books"]}')


    elif n==3:
        print("Here you borrow a book")
        if user["no_of_books"]==4:
            print("you Cannot Barrow a book")
        else:
            a = input("Enter a book name:")
            if a not in books:
                print("book is not available")
            elif  a in user["books_taken"]:
                print("this book is already Taken")

            elif books[a]==0:
                print("This book is currently not available ")
            elif books[a]!=0:
                user["no_of_books"]+=1
                books[a]-=1
                user["books_taken"].append(a)
                print("borrowed successfully")


    elif n==4:
        print("Here you return a book")
        if user["no_of_books"]==0 or user["books_taken"]==[]:
            print("You cannot return a book")
        else:
            b=input("Which book you want to return:")
            if b in  user["books_taken"]:
                books[b]+=1
                user["books_taken"].remove(b)
                user["no_of_books"]-=1
                print("return Successfull")

            elif b not in user["books_taken"]:
                print("This book is not having")

    elif n == 5:
        print("Thankyou for visiting us")
        break
    else:
        print("Invalid input please enter a number between 1 and 5.")


