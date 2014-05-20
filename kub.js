function main()
{
  var WMIN = -99;
  var WMAX =  99;
  var N    =  80;
  var d    = new Array(N);
  var lw   = new Array(WMAX - WMIN + 1);
  var i,j,t;

// tworzymy zbiór wejściowy do sortowania

  for(i = 0; i < N; i++)
    d[i] = WMIN + Math.floor(Math.random() * (WMAX - WMIN + 1));

// wyświetlamy zawartość zbioru przed sortowaniem

  t = "Przed sortowaniem:<BR><BR>";
  for(i = 0; i < N; i++)
    if((i + 1) % 20) t += d[i] + " "; else t += d[i] + "<BR>";
  t += "<BR>";

// sortujemy

// najpierw zerujemy liczniki

  for(i = WMIN; i <= WMAX; i++) lw[i - WMIN] = 0;

// zliczamy w odpowiednich licznikach wystąpienia
// wartości elementów sortowanego zbioru

  for(i = 0; i < N; i++) lw[d[i] - WMIN]++;

// zapisujemy do zbioru wynikowego numery niezerowych liczników
// tyle razy, ile wynosi ich zawartość

  j = 0;
  for(i = WMIN; i <= WMAX; i++) while(lw[i - WMIN]--) d[j++] = i;

// wyświetlamy zawartość zbioru po sortowaniu

  t += "Po sortowaniu:<BR><BR>";
  for(i = 0; i < N; i++)
    if((i + 1) % 20) t += d[i] + " "; else t += d[i] + "<BR>";

// koniec

  document.getElementById("t_out").innerHTML = t;
} 
