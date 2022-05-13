-i "INPUT_PATH.mp4" -vf "fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse" -y "OUTPUT_PATH.gif"

-i input.mp4 -vf fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse -y output.gif

ffmpeg -i sbunny.mov -vf fps=16,scale=600:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=0[p];[s1][p]paletteuse -y ptest7.gif
