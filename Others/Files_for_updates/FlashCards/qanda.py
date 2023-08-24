import random as r
import tkinter as tk
from tkinter import *

def logic():
        num=r.randint(1,6)
        if num==1:
            q='NOT gate\nInput1 = 1, Output:'
            a=['0','zero']
        elif num==2:
            q='AND gate:\nInput1 = 1, Input2 = 0, Output:'
            a=['0','zero']
        elif num==3:
            q='OR gate:\nInput1 = 1, Input2 = 0, Output: '
            a=['1','one']
        elif num==4:
            q='A NOT gate does what to the input?'
            a=['Reverses','Opposite','Inverts']
        elif num==5:
            q='For the output to be 1 on an AND gate, do both inputs have to be 1?[Y/N]'
            a=['Yes','Y','False']
        elif num==6:
            q='0001+1001=?'
            a=['1010']
        return q, a

def computers():
        num=r.randint(1,12)
        if num==1:
            q='Define ATX power supply'
            a=['Updated version of AT','obsolete']
        elif num==2:
            q='Define ATX12V power supply'
            a=['Most common power supply today','second motherboard to give dedicated power CPU']
        elif num==3:
            q='Define EPS12v power supply'
            a=['Originally designed for network servers','High end desktops']
        elif num==4:
            q='State 1 or ALL registers in a CPU'
            a=['CU','MDR','MAR','ALU','ACC','PC','CIR']
        elif num==5:
            q='State what F, D or E are in the FDE Cycle'
            a=['fetch','decode','execute']
        elif num==6:
            q='Define secondary storage'
            a=['Long term storage','non volatile','non-volatile','used to store data']
        elif num==7:
            q='State a method of protection from ESD'
            a=['Antistatic bag','grounded mats','antistatic wrist strap']
        elif num==8:
            q='What is a Chassis?'
            a=['computer case',' that holds all the components inside']
        elif num==9:
            q='What does CPU stand for?'
            a=['Central Processing Unit']
        elif num==10:
            q='Define BIOS'
            a=['Used to help boot the computer','manage the flow of data']
        elif num==11:
            q='What does NIC stand for? Define its use'
            a=['Network Interface Card','Provides a physical connection to the network at the PC or the other end device']
        elif num==12:
            q='Define AT power supply'
            a=['Original power supply for legacy computers','obsolete']
        elif num==13:
                q='a'
                a=['a']
        return q, a

def networking():
        num=r.randint(1,18)
        if num==1:
            q='Define TCP'
            a=['Tracking network connections','between mutliple destinations']
        elif num==2:
            q='Define IP'
            a=['Adding addressing','data can be routed to destination']
        elif num==3:
            q='What is a repeater?'
            a=['a hardware device','extends the signal strength','regenerates signal strength']
        elif num==4:
            q='What is a hub?'
            a=['Receives data on one port','sends data to all of its other ports']
        elif num==5:
            q='State one disadvantage of a hub'
            a=['Increases network traffic','Sends traffic to other devices']
        elif num==6:
            q='What is a bridge?'
            a=['divides LANs into segments','keep a record of all devices on each segment']
        elif num==7:
            q='A switch records..'
            a=['MAC','addresses']
        elif num==8:
            q='How does a WAP communicate? And what to?'
            a=['Radio waves','NIC','network interface card']
        elif num==9:
            q='Routers connect ______ using _____'
            a=['networks','network','MAC adresses']
        elif num==10:
            q='Firewalls protect data and equipment on a network from _____ ____'
            a=['unauthorised access','invalid access','intruders']
        elif num==11:
            q='What does an IDS do?'
            a=['Monitors traffic on the network']
        elif num==12:
            q='What does an IPS do?'
            a=['Monitors traffic but must pass through for processing']
        elif num==13:
            q='UTM, Unified Threat Management, is a generic...'
            a=['all-in-one security appliance','security with everything built in']
        elif num==14:
            q='A UTM typically defends from..'
            a=['Zero Day','DDoS','Denial of Service','DoS','Spyware','Network access','VPN services']
        elif num==15:
            q='An endpoint mangement server is typically responsible for..'
            a=['Monitoring all end deivces','Monitoring all connected devices']
        elif num==16:
            q='How does a Coaxial Cable transfer/carry data?'
            a=['Electrical Signals']
        elif num==17:
            q='How does a Fibre-Optic Cable transfer/carry data?'
            a=['Light Signals']
        elif num==18:
            q='State 1 type of area network'
            a=['PAN','LAN','WAN','WLAN','MAN','SAN','CAN','POLAN']
        return q, a




