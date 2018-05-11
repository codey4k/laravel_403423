@extends('layout')

@section('title', 'Home')

@section('content')
    
    @include('components/menu')
    
    @include('components/header', ['title' => 'Welcome'])
    
    @include('components/footer')
    
@stop