/*WebMidi:
Webworkers = can perform things that lead to stable timing.
    Can send signals back and forth
Background task that counts milliseconds. send signal to browser at specified intervals. Length = tempo
16 steps in sequence @ 120bpm. 60sec/120bpm = 0.5 bps. 0.5bps/16steps = 0.03125. *1000 = 31.25 = 31 ms between steps.
Swing  = % 1st beat: 2nd beat
16th note 31ms. 15% swing. 
1st beat 100-15*(31/100) = 26.35
2nd beat difference = 31-25(missed something here)*/