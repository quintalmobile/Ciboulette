# ![Logo de Ciboulette](ciboulette.png) Ciboulette

Es una red social 100% libre, entre pares, descentralizada y distribuida

 
Con simple blog y lectores de Noticias (RSS, Atom, RDF) se crea una red 
social libre en la que cada persona publica novedades directamente desde 
su computadora. Y es accesible desde cualquier computadora con 
[Tor](https://www.torproject.org/) gracias a sus servicios ocultos,

## Instalación

~~~
cd /tmp
wget https://raw.github.com/b4zz4/Ciboulette/master/ciboulette
bash ciboulette -u
~~~

Luego de instalarlo se puede usar desde la terminal [ciboulette -h](ayuda.md) o desde su [interfaz gráfica](captura.png).

* [Wiki del proyecto](http://wiki.hackcoop.com.ar/Ciboulette)

## ¿Por que 100% libre?

Esta hecho únicamente con software libre. Y es una de las pocas redes sociales que respetan los [conceptos del software libre](https://www.gnu.org/philosophy/free-sw.html) en su uso

* La libertad de ejecutar el programa para cualquier propósito (libertad 0).
* La libertad de estudiar cómo funciona el programa, y cambiarlo para que haga lo que usted quiera (libertad 1). El acceso al código fuente es una condición necesaria para ello.
* La libertad de redistribuir copias para ayudar a su prójimo (libertad 2).
* La libertad de distribuir copias de sus versiones modificadas a terceros (libertad 3). Esto le permite ofrecer a toda la comunidad la oportunidad de beneficiarse de las modificaciones. El acceso al código fuente es una condición necesaria para ello.

Muchas redes sociales libres moderan a sus usuarios o pretenden un fin especifico para su red, violando nuestra **libertad 0**

## ¿Que es descentralizada?

Que no posee un centro. 
Por que no hay un servidor al que los usuarios tengan que acceder. Los pares iguales.
Gracias a Tor y la publicación de servicio ocultos dentro de la red: los datos pasan entre nodos (pares iguales), de este modo todos los nodos de ciboulette se ven entre si.

## ¿Que es distribuida?

Es una red totalmente distribuida por no tener un centro, ni muchos de ellos.

## ¿Que es entre pares?

Que no existen servidores centrales. Los datos van de una computadora a otro directamente, pasando entre pares iguales.


## Quehaceres

* ~~Lector local y estatico de feed ([rawdog](http://offog.org/code/rawdog/) + https://github.com/roop/ngoplanet_org/)~~
 * Publicador y editor de perfil con CGI (solo para la red local)
 * Ejemplos de como editar en [markdown](https://es.wikipedia.org/wiki/Markdown)
* ~~Sacar el nombre del usuario de `whoami`~~
 * Poner datos de `finger` guardados en los archivos `.plan`, `.project` y `.pgpkey`
* [Chat para ciboulette](chat.png) prosody + [mod_onions](https://blog.thijsalkema.de/blog/2013/06/11/xmpp-federation-over-tor-hidden-services/)
* Método para compartir archivos y multimedia
 * Al usar imágenes en un articulo se copien en una carpeta y cree miniaturas
  * Generar galería de las imágenes
