```markdown
# ASCII and Unicode Cheat Sheet

## ASCII

ASCII is a 7-bit character set (0–127). Binary values below are shown as 8 bits, with a leading zero. The printable range is 0x20–0x7E; control characters are summarized separately.

| Character | Hex | Binary |
|---|---:|---:|
| Space | `20` | `00100000` |
| `!` | `21` | `00100001` |
| `"` | `22` | `00100010` |
| `#` | `23` | `00100011` |
| `$` | `24` | `00100100` |
| `%` | `25` | `00100101` |
| `&` | `26` | `00100110` |
| `'` | `27` | `00100111` |
| `(` | `28` | `00101000` |
| `)` | `29` | `00101001` |
| `*` | `2A` | `00101010` |
| `+` | `2B` | `00101011` |
| `,` | `2C` | `00101100` |
| `-` | `2D` | `00101101` |
| `.` | `2E` | `00101110` |
| `/` | `2F` | `00101111` |
| `0` | `30` | `00110000` |
| `1` | `31` | `00110001` |
| `2` | `32` | `00110010` |
| `3` | `33` | `00110011` |
| `4` | `34` | `00110100` |
| `5` | `35` | `00110101` |
| `6` | `36` | `00110110` |
| `7` | `37` | `00110111` |
| `8` | `38` | `00111000` |
| `9` | `39` | `00111001` |
| `:` | `3A` | `00111010` |
| `;` | `3B` | `00111011` |
| `<` | `3C` | `00111100` |
| `=` | `3D` | `00111101` |
| `>` | `3E` | `00111110` |
| `?` | `3F` | `00111111` |
| `@` | `40` | `01000000` |
| `A` | `41` | `01000001` |
| `B` | `42` | `01000010` |
| `C` | `43` | `01000011` |
| `D` | `44` | `01000100` |
| `E` | `45` | `01000101` |
| `F` | `46` | `01000110` |
| `G` | `47` | `01000111` |
| `H` | `48` | `01001000` |
| `I` | `49` | `01001001` |
| `J` | `4A` | `01001010` |
| `K` | `4B` | `01001011` |
| `L` | `4C` | `01001100` |
| `M` | `4D` | `01001101` |
| `N` | `4E` | `01001110` |
| `O` | `4F` | `01001111` |
| `P` | `50` | `01010000` |
| `Q` | `51` | `01010001` |
| `R` | `52` | `01010010` |
| `S` | `53` | `01010011` |
| `T` | `54` | `01010100` |
| `U` | `55` | `01010101` |
| `V` | `56` | `01010110` |
| `W` | `57` | `01010111` |
| `X` | `58` | `01011000` |
| `Y` | `59` | `01011001` |
| `Z` | `5A` | `01011010` |
| `[` | `5B` | `01011011` |
| `\\` | `5C` | `01011100` |
| `]` | `5D` | `01011101` |
| `^` | `5E` | `01011110` |
| `_` | `5F` | `01011111` |
| `` ` `` | `60` | `01100000` |
| `a` | `61` | `01100001` |
| `b` | `62` | `01100010` |
| `c` | `63` | `01100011` |
| `d` | `64` | `01100100` |
| `e` | `65` | `01100101` |
| `f` | `66` | `01100110` |
| `g` | `67` | `01100111` |
| `h` | `68` | `01101000` |
| `i` | `69` | `01101001` |
| `j` | `6A` | `01101010` |
| `k` | `6B` | `01101011` |
| `l` | `6C` | `01101100` |
| `m` | `6D` | `01101101` |
| `n` | `6E` | `01101110` |
| `o` | `6F` | `01101111` |
| `p` | `70` | `01110000` |
| `q` | `71` | `01110001` |
| `r` | `72` | `01110010` |
| `s` | `73` | `01110011` |
| `t` | `74` | `01110100` |
| `u` | `75` | `01110101` |
| `v` | `76` | `01110110` |
| `w` | `77` | `01110111` |
| `x` | `78` | `01111000` |
| `y` | `79` | `01111001` |
| `z` | `7A` | `01111010` |
| `{` | `7B` | `01111011` |
| `|` | `7C` | `01111100` |
| `}` | `7D` | `01111101` |
| `~` | `7E` | `01111110` |

### ASCII control characters

| Name | Hex | Binary (8-bit) | Meaning |
|---|---:|---:|---|
| NUL | `00` | `00000000` | Null |
| BEL | `07` | `00000111` | Alert/bell |
| BS | `08` | `00001000` | Backspace |
| TAB | `09` | `00001001` | Horizontal tab |
| LF | `0A` | `00001010` | Line feed |
| VT | `0B` | `00001011` | Vertical tab |
| FF | `0C` | `00001100` | Form feed |
| CR | `0D` | `00001101` | Carriage return |
| ESC | `1B` | `00011011` | Escape |
| DEL | `7F` | `01111111` | Delete |

Other control codes occupy `00`–`1F`. ASCII punctuation, digits, and letters follow regular ranges: `0`–`9` = `30`–`39`, `A`–`Z` = `41`–`5A`, and `a`–`z` = `61`–`7A`.

## Unicode examples

Unicode assigns each character a code point, written `U+` followed by hexadecimal. The binary column is the code point value (padded to a whole number of 4-bit groups), **not** its UTF-8/UTF-16 bytes. UTF-8 uses variable-length byte sequences.

| Character | Name | Code point (hex) | Code point (binary) |
|---|---|---:|---:|
| `A` | Latin capital letter A | `U+0041` | `0000 0000 0100 0001` |
| `é` | Latin small letter e with acute | `U+00E9` | `0000 0000 1110 1001` |
| `ñ` | Latin small letter n with tilde | `U+00F1` | `0000 0000 1111 0001` |
| `€` | Euro sign | `U+20AC` | `0010 0000 1010 1100` |
| `£` | Pound sign | `U+00A3` | `0000 0000 1010 0011` |
| `©` | Copyright sign | `U+00A9` | `0000 0000 1010 1001` |
| `™` | Trade mark sign | `U+2122` | `0010 0001 0010 0010` |
| `°` | Degree sign | `U+00B0` | `0000 0000 1011 0000` |
| `Ω` | Greek capital letter omega | `U+03A9` | `0000 0011 1010 1001` |
| `中` | CJK ideograph (middle) | `U+4E2D` | `0100 1110 0010 1101` |
| `あ` | Hiragana letter A | `U+3042` | `0011 0000 0100 0010` |
| `Ж` | Cyrillic capital letter Zhe | `U+0416` | `0000 0100 0001 0110` |
| `←` | Leftwards arrow | `U+2190` | `0010 0001 1001 0000` |
| `✓` | Check mark | `U+2713` | `0010 0111 0001 0011` |
| `★` | Black star | `U+2605` | `0010 0110 0000 0101` |
| `😀` | Grinning face | `U+1F600` | `0001 1111 0110 0000 0000` |

### Quick distinctions

- ASCII is a small character set; Unicode covers characters from many writing systems and symbol sets.
- Unicode code points are not the same thing as encoded bytes. For example, `A` is `U+0041`; its UTF-8 bytes are `41` (hex), while `é` (`U+00E9`) is encoded in UTF-8 as `C3 A9`.
- The first 128 Unicode code points match ASCII, so ASCII text is also valid UTF-8.
```

1 is on
0 is off

- Throughput is the total amount of data that can be transferred in a given amount of time.
- Latency is the amount of delay before that transfer of data begins.
- The smallest unit of data is the bit, and the performance of any data transfer, be it long-term storage devices, short-term RAM, or Internet devices is measured in the throughput and latency of this data.
- Both CPUs and GPUs have similar measures for computation performance. Each is made up of cores that can do one operation at a time, and these cores have set clock speeds that determine how often they can perform these operations.
- The energy devices use is measured in watts. The greater the wattage, the greater the amount of heat the device creates. Electricity costs can be a substantial part of the cost over the lifetime of the device.

"The control unit (CU) is the overseer of the CPU, responsible for controlling and monitoring the input and output of data from the computer’s hardware. Its primary job is making sure that data is sent to the right component at the right time, and arrives with integrity.

The arithmetic and logic unit (ALU) is where all of the processing of the computer takes place. It is the fundamental part of the CPU that actually does the arithmetic calculations of the data as well as the handling of logical comparisons and conditionals.

The register, or immediate access store, is a limited space, high-speed memory mounted on the CPU for quick processing. It provides the CPU with a place to store values that are crucial for the calculations the ALU is currently processing."

