import time as t, random as r
import tkinter as tk
from tkinter import *
from qanda import *
#GUI Help
def percentage(correct,incorrect,skip):
    if correct==0 or incorrect==0:
        return 0, 0
    else:
        total=correct+incorrect+skip
        percentage=round(((correct/total)*100),2)
        return percentage,total
def help1():
    h=Tk()
    label=Label(h,text='\n'.join(['Simple instructions on how to use this simple quiz!',
        '1) Press "Begin" to start the quiz',
        '2) A question will come up, simply answer it in the text box and press submit',
        '3) The Answer will appear beneath your answer',
        'Key Points:',
        '-For every answer you get right/wrong/skip, 1 point will be tallied',
        '-I = Input, O = Output',
        '-To end the quiz, type "end", "finish" or "quit" into the input section of the question']),font=("Comic Sans MS", 20))
    b1=Button(h,text='Close',command=lambda:[h.destroy(),mainmenu()],height=5,width=40,bg='maroon',fg='white')      
    [label.pack(),b1.pack()]
#GUI Main menu
#Contains: Begin, Help
def mainmenu():
    tk=Tk()
    tk.iconbitmap('./media/pyicon.ico')
    tk.title('Main Menu')
    label=Label(text='Welcome to the Flash Card Quiz',font=('Comic Sans MS', 25))
    b1=Button(text='Begin',command=lambda:[tk.destroy()],height=5,width=40,fg='black',bg='PeachPuff2',font=("Calibri", 15))
    b2=Button(text='Help',command=lambda:[help1(),tk.destroy()],height=5,width=40,fg='black',bg='bisque',font=("Calibri", 15))
    b3=Button(text='Exit',command=lambda:[quit(),tk.destroy()],height=5,width=40,bg='PeachPuff2',font=("Calibri", 15))
    [label.pack(),b1.pack(),b2.pack(),b3.pack()]
    tk.mainloop()
mainmenu()
def ne():
    global op
    op='a'
def co():
    global op
    op='b'
def lo():
    global op
    op='c'
opt=Tk()
label=Label(opt,text='Select your category',font=('Century Schoolbook',25))
b1=Button(opt,text='Networking',command=lambda:[ne(), opt.destroy()],height=5,width=40,bg='LightGrey')
b2=Button(opt,text='Computers',command=lambda:[co(), opt.destroy()],height=5,width=40,bg='LightGrey')
b3=Button(opt,text='Logic',command=lambda:[lo(), opt.destroy()],height=5,width=40,bg='LightGrey')
[label.pack(),b1.pack(),b2.pack(),b3.pack()]
opt.mainloop()
correct,incorrect,skip,answer=0,0,0,''
while True:
    while True:
        out=0
        if op.lower()=='a':
            q, a = networking()
        elif op.lower()=='b':
            q, a = computers()
        elif op.lower()=='c':
            q, a = logic()
        def out():
            global answer
            answer=inputtxt.get(1.0, "end-1c")
            answer=answer.lower()
        gui=Tk()
        gui.geometry('1000x900')
        gui.title('Quiz')
        label=Label(gui,text=f'Question: {q}',font=('Comic Sans MS', 16))
        inputtxt=Text(gui, height=15,font=('Comic Sans MS',15))
        b1=Button(gui, text='Submit',height=5,width=40,command=lambda:[out(),gui.destroy()],bg='lightGrey')
        menubar=Menu(gui)
        list1=Menu(menubar,title='x')
        menubar.add_cascade(label='File',menu=list1)
        list1.add_command(label='Quit',command=lambda:quit())
        [inputtxt.pack(),b1.pack(),label.pack()]
        gui.config(menu=menubar)
        gui.mainloop()
        if (not answer):
            print('Skipped❗ Generating new question')
            skip=skip+1
        else: break
    if answer=='end' or answer=='finish' or answer=='exit':
        break
    elif isinstance(a,list)==True:
        for i in a:
            if (i.lower() == answer or i.lower() in answer or answer in i.lower()):
                print('✔')
                correct=correct+1
                out=1
                break
            if out==0:
                t.sleep(0.5)
                print(f'A: '+', '.join(a))
                incorrect=incorrect+1
    else:
        t.sleep(0.5)
        print(f'A: '+', '.join(a))
        incorrect=incorrect+1
        
#End
gui=Tk()
percentage,total=percentage(correct,incorrect,skip)
label=Label(gui, text=f'>--------------<\nScores\nCorrect✔: {correct}\nIncorrect❌: {incorrect}\nSkipped☢: {skip}\nPercentage: {percentage}%\nQuestions: {correct}/{total}\n>--------------<',font=('Comic Sans MS', 50))
b1=Button(gui,text='Close',height=5,width=40,command=lambda: gui.destroy(),bg='grey',fg='white',font=('Comic Sans MS', 15))
[label.pack(), b1.pack()]
t.sleep(1)
gui.mainloop()
print('Thanks for taking your time out playing this!')
