-i "INPUT_PATH.mp4" -vf "fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse" -y "OUTPUT_PATH.gif"

-i input.mp4 -vf fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse -y output.gif

//working on macos:
ffmpeg  -i sbunny.mov -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
ffmpeg  -i sbunny.mov -vf "fps=30,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif

//browser version adaptation for high quality gif:
`-i input.mp4 -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif`


//new pallet each frame, (take a long time)
ffmpeg  -i sbunny.mov -vf "fps=30,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=single[p];[s1][p]paletteuse=new=1" -loop 0 output.gif



ffmpeg -i sbunny.mov -vf fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse -y ptest7.gif
